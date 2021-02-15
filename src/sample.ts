import { Project } from "ts-morph";

import * as Famix from "./lib/famix/src/model/famix";
import * as fs from "fs";
import { FamixRepository } from "./lib/famix/src/famix_repository";

const project = new Project();

try {
    const sourceFiles = project.addSourceFilesAtPaths("**/resources/*.ts");
    var fmxRep = new FamixRepository();
    var fmxClasses = new Array<Famix.Class>();

    sourceFiles.forEach(file => {
        var fmxFileAnchor = new Famix.FileAnchor(fmxRep);
        fmxFileAnchor.setFileName(file.getBaseName());
        fmxFileAnchor.setStartLine(file.getStartLineNumber());
        fmxFileAnchor.setEndLine(file.getEndLineNumber());

        if (file.getNamespaces().length > 0) {
            var namespace = file.getNamespaces()[0];
            var name = namespace.getName();

            let fmxNamespace = new Famix.Namespace(fmxRep);
            fmxNamespace.setName(name);

            namespace.getClasses().forEach(cls => {

                var fmxClass = new Famix.Class(fmxRep);
                var clsName = cls.getName();
                fmxClass.setName(clsName);
                fmxClass.setIsInterface(false);
                fmxRep.addElement(fmxClass);
                fmxClasses.push(fmxClass);

                cls.getMethods().forEach(method => {
                    var fmxMethod = new Famix.Method(fmxRep);
                    var methodName = method.getName();
                    fmxMethod.setName(methodName);
                    fmxClass.addMethods(fmxMethod);
                });

                cls.getProperties().forEach(prop => {
                    var fmxAttr = new Famix.Attribute(fmxRep);
                    fmxAttr.setName(prop.getName());
                    fmxClass.addAttributes(fmxAttr);
                });

            });

            namespace.getInterfaces().forEach(inter => {
                var fmxInter = new Famix.Class(fmxRep);
                var interName = inter.getName();
                fmxInter.setName(interName);
                fmxInter.setIsInterface(true);
                fmxRep.addElement(fmxInter);
                fmxClasses.push(fmxInter);

                inter.getMethods().forEach(method => {
                    var fmxMethod = new Famix.Method(fmxRep);
                    var methodName = method.getName();
                    fmxMethod.setName(methodName);
                    fmxInter.addMethods(fmxMethod);
                });

                inter.getProperties().forEach(prop => {
                    var fmxAttr = new Famix.Attribute(fmxRep);
                    fmxAttr.setName(prop.getName());
                    fmxInter.addAttributes(fmxAttr);
                });
            })

            // Get Inheritances
            namespace.getClasses().forEach(cls => {
                
                var baseClass = cls.getBaseClass();
                if (baseClass !== undefined){
                    var fmxInher = new Famix.Inheritance(fmxRep);
                    var sub = fmxClasses.filter(fmxc => fmxc.getName() === cls.getName())[0];
                    var fmxSuper = fmxClasses.filter(fmxc => fmxc.getName() === baseClass.getName())[0];
                    fmxInher.setSubclass(sub);
                    fmxInher.setSuperclass(fmxSuper);
                }
            });

        }

    });

    var mse = fmxRep.getMSE();
    fs.writeFile('sample.mse', mse, (err) => {
        if (err) { throw err; }
    });
}
catch (Error) {
    console.log(Error.message);
}

