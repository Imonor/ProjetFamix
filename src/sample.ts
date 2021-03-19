import {FunctionDeclaration, NamespaceDeclaration, Project, PropertyDeclaration, SourceFile, SyntaxKind } from "ts-morph";

import * as Famix from "./lib/famix/src/model/famix";
import * as fs from "fs"
import { FamixRepository } from "./lib/famix/src/famix_repository";

const project = new Project();
var fmxRep = new FamixRepository();
var namespaces = new Array<NamespaceDeclaration>();
var fmxNamespaces = new Array<Famix.Namespace>();
var fmxTypes = new Map<string, Famix.Type>();

try {
    const sourceFiles = project.addSourceFilesAtPaths("**/resources/*.ts");

    sourceFiles.forEach(file => {

        var fmxIndexFileAnchor = new Famix.IndexedFileAnchor(fmxRep);
        fmxIndexFileAnchor.setFileName(file.getFilePath());
        fmxIndexFileAnchor.setStartPos(file.getStart());
        fmxIndexFileAnchor.setEndPos(file.getEnd());

        fmxRep.addElement(fmxIndexFileAnchor);

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
                var fmxClass = createFamixClass(cls, file);
                fmxNamespace.addTypes(fmxClass);

                cls.getMethods().forEach(method => {
                    var fmxMethod = createFamixMethod(method, file);
                    fmxClass.addMethods(fmxMethod);
                });

                cls.getProperties().forEach(prop => {
                    var fmxAttr = createFamixAttribute(prop, file);
                    fmxClass.addAttributes(fmxAttr);
                });

                cls.getConstructors().forEach(cstr => {
                    var fmxMethod = createFamixMethod(cstr, file, false, true);
                    fmxClass.addMethods(fmxMethod);
                });

            });

            namespace.getInterfaces().forEach(inter => {
                var fmxInter = createFamixClass(inter, file, true);
                fmxNamespace.addTypes(fmxInter);

                inter.getMethods().forEach(method => {
                    var fmxMethod = createFamixMethod(method, file, true);
                    fmxInter.addMethods(fmxMethod);
                });

                inter.getProperties().forEach(prop => {
                    var fmxAttr = createFamixAttribute(prop, file);
                    fmxInter.addAttributes(fmxAttr);
                });

            });

            namespace.getFunctions().forEach(fct => {
                var fmxFunct = createFamixFunction(fct, file);
                fmxNamespace.addFunctions(fmxFunct);
            });
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

function createFamixClass(cls, file: SourceFile, isInterface=false): Famix.Class {
    var fmxClass = new Famix.Class(fmxRep);
    var clsName = cls.getName();
    fmxClass.setName(clsName);
    fmxClass.setIsInterface(isInterface);

    var fmxIndexFileAnchor = new Famix.IndexedFileAnchor(fmxRep);
    fmxIndexFileAnchor.setFileName(file.getFilePath());
    fmxIndexFileAnchor.setStartPos(cls.getStart());
    fmxIndexFileAnchor.setEndPos(cls.getEnd());
    fmxIndexFileAnchor.setElement(fmxClass);

    fmxClass.setSourceAnchor(fmxIndexFileAnchor);

    fmxRep.addElement(fmxClass);
    fmxTypes.set(clsName, fmxClass);
    return fmxClass;
}

function createFamixMethod(method, file: SourceFile, isSignature=false, isConstructor=false): Famix.Method {

    var fmxMethod = new Famix.Method(fmxRep);
    if(isConstructor) {
        fmxMethod.setName("constructor");
    }
    else {
        var methodName = method.getName();
        fmxMethod.setName(methodName);
    }

    var methodTypeName = getUsableName(method.getReturnType().getText());
    var fmxType = getFamixType(methodTypeName);
    fmxMethod.setDeclaredType(fmxType);

    var fmxIndexFileAnchor = new Famix.IndexedFileAnchor(fmxRep);
    fmxIndexFileAnchor.setFileName(file.getFilePath());
    fmxIndexFileAnchor.setStartPos(method.getStart());
    fmxIndexFileAnchor.setEndPos(method.getEnd());
    fmxIndexFileAnchor.setElement(fmxMethod);

    fmxMethod.setSourceAnchor(fmxIndexFileAnchor);

    fmxMethod.setNumberOfLinesOfCode(method.getEndLineNumber() - method.getStartLineNumber());

    method.getParameters().forEach(param => {
        var fmxParam = new Famix.Parameter(fmxRep);
        var paramTypeName = getUsableName(param.getType().getText());
        fmxParam.setDeclaredType(getFamixType(paramTypeName));
        fmxParam.setName(param.getName());
        fmxMethod.addParameters(fmxParam);
    });

    if(!isSignature) {
        let MethodeCyclo = 1;
        method.getStatements().forEach(stmt => {
            if([SyntaxKind.IfStatement, SyntaxKind.WhileStatement, SyntaxKind.ForStatement,
                SyntaxKind.DoStatement].includes(stmt.getKind())){
                MethodeCyclo++;
            }
        });

        fmxMethod.setCyclomaticComplexity(MethodeCyclo);
        fmxMethod.setNumberOfStatements(method.getStatements().length);
    }

    return fmxMethod;
}

function createFamixAttribute(prop, file: SourceFile): Famix.Attribute {
    var fmxAttr = new Famix.Attribute(fmxRep);
    fmxAttr.setName(prop.getName());

    var propTypeName = prop.getType().getText();
    var fmxType = getFamixType(propTypeName);
    fmxAttr.setDeclaredType(fmxType);

    var fmxIndexFileAnchor = new Famix.IndexedFileAnchor(fmxRep);
    fmxIndexFileAnchor.setFileName(file.getFilePath());
    fmxIndexFileAnchor.setStartPos(prop.getStart());
    fmxIndexFileAnchor.setEndPos(prop.getEnd());
    fmxIndexFileAnchor.setElement(fmxAttr);

    fmxAttr.setSourceAnchor(fmxIndexFileAnchor);

    return fmxAttr;

}

function createFamixFunction(fct: FunctionDeclaration, file: SourceFile): Famix.Function {
    var fmxFunct = new Famix.Function(fmxRep);
    fmxFunct.setName(fct.getName());
        
    var fctTypeName = getUsableName(fct.getReturnType().getText());
    var fmxType = getFamixType(fctTypeName);
    fmxFunct.setDeclaredType(fmxType);
    
    var fmxIndexFileAnchor = new Famix.IndexedFileAnchor(fmxRep);
    fmxIndexFileAnchor.setFileName(file.getFilePath());
    fmxIndexFileAnchor.setStartPos(fct.getStart());
    fmxIndexFileAnchor.setEndPos(fct.getEnd());
    fmxIndexFileAnchor.setElement(fmxFunct);

    fmxFunct.setSourceAnchor(fmxIndexFileAnchor);

    fmxFunct.setNumberOfLinesOfCode(fct.getEndLineNumber() - fct.getStartLineNumber());
    
    fct.getParameters().forEach(param => {
        var fmxParam = new Famix.Parameter(fmxRep);
        var paramTypeName = getUsableName(param.getType().getText());
        fmxParam.setDeclaredType(getFamixType(paramTypeName));
        fmxParam.setName(param.getName());
        fmxFunct.addParameters(fmxParam);
    });

    let MethodeCyclo = 1;
    fct.getStatements().forEach(stmt => {
        if([SyntaxKind.IfStatement, SyntaxKind.WhileStatement, SyntaxKind.ForStatement,
            SyntaxKind.DoStatement].includes(stmt.getKind())){
            MethodeCyclo++;
        }
    });

    fmxFunct.setCyclomaticComplexity(MethodeCyclo);
    fmxFunct.setNumberOfStatements(fct.getStatements().length);

    return fmxFunct;
}

function getUsableName(name: string): string {
    if(name.includes('<'))
        name = name.substring(0, name.indexOf('<'));
    if(name.includes('.'))
        name = name.substring(name.lastIndexOf('.') + 1);
    
    return name;
}

function getFamixType(typeName: string): Famix.Type {
    var fmxType: Famix.Type;

    if(!fmxTypes.has(typeName)) {
        fmxType = new Famix.Type(fmxRep);
        fmxType.setName(typeName);
        fmxTypes.set(typeName, fmxType);
    }
    else {
        fmxType = fmxTypes.get(typeName);
    }

    return fmxType;
}
