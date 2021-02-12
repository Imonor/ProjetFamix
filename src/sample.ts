import {Project} from "ts-morph";

import * as Famix from "./famix/src/model/famix";
import * as fs from "fs";
import { FamixRepository } from "./famix/src/famix_repository";


const project = new Project();


try 
{
    const sourceFiles = project.addSourceFilesAtPaths("**/resources/*.ts");
    var fmxRep = new FamixRepository();

    sourceFiles.forEach( file => {
        var fmxFileAnchor = new Famix.FileAnchor(fmxRep);
        fmxFileAnchor.setFileName(file.getBaseName());
        fmxFileAnchor.setStartLine(file.getStartLineNumber());
        fmxFileAnchor.setEndLine(file.getEndLineNumber());

        console.log("File Name ", file.getBaseName());

        if(file.getNamespaces().length > 0) {
            var namespace = file.getNamespaces()[0];
            var name = namespace.getName();

            let fmxNamespace = new Famix.Namespace(fmxRep);
            fmxNamespace.setName(name);

            namespace.getClasses().forEach(cls => {

                var fmxClass = new Famix.Class(fmxRep);
                var clsName = cls.getName();
                fmxClass.setName(clsName);
                fmxRep.addElement(fmxClass);

                cls.getMethods().forEach(method => {
                    var fmxMethod = new Famix.Method(fmxRep);
                    var methodName = method.getName();
                    fmxMethod.setName(methodName);
                    fmxClass.addMethods(fmxMethod);
                });
            });
             
        }
        
    });


    var mse = fmxRep.getMSE();
    fs.writeFile('sample.mse', mse, (err) => {
        if(err) { throw err; }
    });
}
catch(Error)
{
    console.log(Error.message);
}

