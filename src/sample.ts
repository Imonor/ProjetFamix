import { NamespaceDeclaration, Project, Type } from "ts-morph";

import * as Famix from "./lib/famix/src/model/famix";
import * as fs from "fs";
import { FamixRepository } from "./lib/famix/src/famix_repository";

const project = new Project();

try {
    const sourceFiles = project.addSourceFilesAtPaths("**/resources/*.ts");
    var fmxRep = new FamixRepository();
    var namespaces = new Array<NamespaceDeclaration>();
    var fmxNamespaces = new Array<Famix.Namespace>();
    var fmxTypes = new Map<string, Famix.Type>();

    sourceFiles.forEach(file => {
        var fmxFileAnchor = new Famix.FileAnchor(fmxRep);
        fmxFileAnchor.setFileName(file.getBaseName());
        fmxFileAnchor.setStartLine(file.getStartLineNumber());
        fmxFileAnchor.setEndLine(file.getEndLineNumber());

        if (file.getNamespaces().length > 0) {
            var namespace = file.getNamespaces()[0];
            var name = namespace.getName();
            var fmxNamespace: Famix.Namespace;
            if(namespaces.filter(ns => ns.getName() === name).length === 0) {
                fmxNamespace = new Famix.Namespace(fmxRep);
                fmxNamespace.setName(name);
                fmxNamespaces.push(fmxNamespace);
            }
            else {
                fmxNamespace = fmxNamespaces.filter(ns => ns.getName() === name)[0];
            }
            namespaces.push(namespace);

            namespace.getClasses().forEach(cls => {

                var fmxClass = new Famix.Class(fmxRep);
                var clsName = cls.getName();
                fmxClass.setName(clsName);
                fmxClass.setIsInterface(false);
                fmxClass.setSourceAnchor(fmxFileAnchor);
                fmxRep.addElement(fmxClass);
                fmxTypes.set(clsName, fmxClass);
                fmxNamespace.addTypes(fmxClass);

                cls.getMethods().forEach(method => {
                    var fmxMethod = new Famix.Method(fmxRep);
                    var methodName = method.getName();
                    fmxMethod.setName(methodName);

                    var methodTypeName = method.getReturnType().getText();
                    var fmxType: Famix.Type;
                    if(!fmxTypes.has(methodTypeName)) {
                        fmxType = new Famix.Type(fmxRep);
                        fmxType.setName(methodTypeName);
                        fmxTypes.set(methodTypeName, fmxType);
                    }
                    else {
                        fmxType = fmxTypes.get(methodTypeName);
                    }
                    fmxMethod.setDeclaredType(fmxType);
                    fmxClass.addMethods(fmxMethod);
                });

                cls.getProperties().forEach(prop => {
                    var fmxAttr = new Famix.Attribute(fmxRep);
                    fmxAttr.setName(prop.getName());

                    var propTypeName = prop.getType().getText();
                    var fmxType: Famix.Type;
                    if(!fmxTypes.has(propTypeName)) {
                        fmxType = new Famix.Type(fmxRep);
                        fmxType.setName(propTypeName);
                        fmxTypes.set(propTypeName, fmxType);
                    }
                    else {
                        fmxType = fmxTypes.get(propTypeName);
                    }
                    fmxAttr.setDeclaredType(fmxType);

                    fmxClass.addAttributes(fmxAttr);
                });

            });

            namespace.getInterfaces().forEach(inter => {
                var fmxInter = new Famix.Class(fmxRep);
                var interName = inter.getName();
                fmxInter.setName(interName);
                fmxInter.setIsInterface(true);
                fmxInter.setSourceAnchor(fmxFileAnchor);
                fmxRep.addElement(fmxInter);
                fmxTypes.set(interName, fmxInter);
                fmxNamespace.addTypes(fmxInter);

                inter.getMethods().forEach(method => {
                    var fmxMethod = new Famix.Method(fmxRep);
                    var methodName = method.getName();
                    fmxMethod.setName(methodName);

                    fmxInter.addMethods(fmxMethod);
                });

                inter.getProperties().forEach(prop => {
                    var fmxAttr = new Famix.Attribute(fmxRep);
                    fmxAttr.setName(prop.getName());

                    var propTypeName = prop.getType().getText();
                    var fmxType: Famix.Type;
                    if(!fmxTypes.has(propTypeName)) {
                        fmxType = new Famix.Type(fmxRep);
                        fmxType.setName(propTypeName);
                        fmxTypes.set(propTypeName, fmxType);
                    }
                    else {
                        fmxType = fmxTypes.get(propTypeName);
                    }
                    fmxAttr.setDeclaredType(fmxType);

                    fmxInter.addAttributes(fmxAttr);
                });
            })
        }

    });
    
    // Get Inheritances
    namespaces.forEach(ns => {
        ns.getClasses().forEach(cls => {
            var baseClass = cls.getBaseClass();
            if (baseClass !== undefined){
                var fmxInher = new Famix.Inheritance(fmxRep);
                var sub = fmxTypes.get(cls.getName());
                var fmxSuper = fmxTypes.get(baseClass.getName());
                fmxInher.setSubclass(sub);
                fmxInher.setSuperclass(fmxSuper);
            }

            var interfaces  = cls.getImplements();
            interfaces.forEach(inter => {
                var fmxImplements = new Famix.Inheritance(fmxRep);
                var completeName = inter.getText();
                var fmxSuperInter = fmxTypes.get(completeName.substring(completeName.lastIndexOf('.') + 1));
                var subImplements = fmxTypes.get(cls.getName());
                fmxImplements.setSuperclass(fmxSuperInter);
                fmxImplements.setSubclass(subImplements);
            });
        });
        
        //*
        ns.getInterfaces().forEach(inter => {
            var baseInter = inter.getBaseTypes()[0];
            if (baseInter !== undefined){
                var fmxInher = new Famix.Inheritance(fmxRep);
                var sub = fmxTypes.get(inter.getName());
                var completeName = baseInter.getText();
                var fmxSuper = fmxTypes.get(completeName.substring(completeName.lastIndexOf('.') + 1));
                fmxInher.setSubclass(sub);
                fmxInher.setSuperclass(fmxSuper);
            }
        });
        //*/
    });


    var mse = fmxRep.getMSE();
    fs.writeFile('sample.mse', mse, (err) => {
        if (err) { throw err; }
    });
}
catch (Error) {
    console.log(Error.message);
}

