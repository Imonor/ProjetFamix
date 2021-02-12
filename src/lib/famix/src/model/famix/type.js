"use strict";
// automatically generated code, please do not change
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Type = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var container_entity_1 = require("./../famix/container_entity");
var Type = /** @class */ (function (_super) {
    __extends(Type, _super);
    function Type() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.typeIncomingReferences = new Set();
        _this.typeStructuresWithDeclaredType = new Set();
        _this.typeTypeAliases = new Set();
        _this.typeSuperInheritances = new Set();
        _this.typeSubInheritances = new Set();
        _this.typeBehavioursWithDeclaredType = new Set();
        _this.typeMethods = new Set();
        _this.typeAttributes = new Set();
        _this.typeArgumentsInParameterizedTypes = new Set();
        return _this;
    }
    // oneMany.Getter
    // @FameProperty(name = "container", opposite = "types")
    Type.prototype.getContainer = function () {
        return this.typeContainer;
    };
    // oneMany.Setter
    Type.prototype.setContainer = function (newContainer) {
        this.typeContainer = newContainer;
        newContainer.getTypes().add(this);
    };
    // manyOne.Getter
    // @FameProperty(name = "incomingReferences", opposite = "target", derived = true)
    Type.prototype.getIncomingReferences = function () {
        return this.typeIncomingReferences;
    };
    // manyOne.Setter
    Type.prototype.addIncomingReferences = function (typeIncomingReferences) {
        if (!this.typeIncomingReferences.has(typeIncomingReferences)) {
            this.typeIncomingReferences.add(typeIncomingReferences);
            typeIncomingReferences.setTarget(this);
        }
    };
    // manyOne.Getter
    // @FameProperty(name = "structuresWithDeclaredType", opposite = "declaredType", derived = true)
    Type.prototype.getStructuresWithDeclaredType = function () {
        return this.typeStructuresWithDeclaredType;
    };
    // manyOne.Setter
    Type.prototype.addStructuresWithDeclaredType = function (typeStructuresWithDeclaredType) {
        if (!this.typeStructuresWithDeclaredType.has(typeStructuresWithDeclaredType)) {
            this.typeStructuresWithDeclaredType.add(typeStructuresWithDeclaredType);
            typeStructuresWithDeclaredType.setDeclaredType(this);
        }
    };
    // manyOne.Getter
    // @FameProperty(name = "typeAliases", opposite = "aliasedType", derived = true)
    Type.prototype.getTypeAliases = function () {
        return this.typeTypeAliases;
    };
    // manyOne.Setter
    Type.prototype.addTypeAliases = function (typeTypeAliases) {
        if (!this.typeTypeAliases.has(typeTypeAliases)) {
            this.typeTypeAliases.add(typeTypeAliases);
            typeTypeAliases.setAliasedType(this);
        }
    };
    // manyOne.Getter
    // @FameProperty(name = "superInheritances", opposite = "subclass", derived = true)
    Type.prototype.getSuperInheritances = function () {
        return this.typeSuperInheritances;
    };
    // manyOne.Setter
    Type.prototype.addSuperInheritances = function (typeSuperInheritances) {
        if (!this.typeSuperInheritances.has(typeSuperInheritances)) {
            this.typeSuperInheritances.add(typeSuperInheritances);
            typeSuperInheritances.setSubclass(this);
        }
    };
    // manyOne.Getter
    // @FameProperty(name = "subInheritances", opposite = "superclass", derived = true)
    Type.prototype.getSubInheritances = function () {
        return this.typeSubInheritances;
    };
    // manyOne.Setter
    Type.prototype.addSubInheritances = function (typeSubInheritances) {
        if (!this.typeSubInheritances.has(typeSubInheritances)) {
            this.typeSubInheritances.add(typeSubInheritances);
            typeSubInheritances.setSuperclass(this);
        }
    };
    // manyOne.Getter
    // @FameProperty(name = "behavioursWithDeclaredType", opposite = "declaredType", derived = true)
    Type.prototype.getBehavioursWithDeclaredType = function () {
        return this.typeBehavioursWithDeclaredType;
    };
    // manyOne.Setter
    Type.prototype.addBehavioursWithDeclaredType = function (typeBehavioursWithDeclaredType) {
        if (!this.typeBehavioursWithDeclaredType.has(typeBehavioursWithDeclaredType)) {
            this.typeBehavioursWithDeclaredType.add(typeBehavioursWithDeclaredType);
            typeBehavioursWithDeclaredType.setDeclaredType(this);
        }
    };
    // manyOne.Getter
    // @FameProperty(name = "methods", opposite = "parentType", derived = true)
    Type.prototype.getMethods = function () {
        return this.typeMethods;
    };
    // manyOne.Setter
    Type.prototype.addMethods = function (typeMethods) {
        if (!this.typeMethods.has(typeMethods)) {
            this.typeMethods.add(typeMethods);
            typeMethods.setParentType(this);
        }
    };
    // manyOne.Getter
    // @FameProperty(name = "attributes", opposite = "parentType", derived = true)
    Type.prototype.getAttributes = function () {
        return this.typeAttributes;
    };
    // manyOne.Setter
    Type.prototype.addAttributes = function (typeAttributes) {
        if (!this.typeAttributes.has(typeAttributes)) {
            this.typeAttributes.add(typeAttributes);
            typeAttributes.setParentType(this);
        }
    };
    // manyMany.Getter
    // @FameProperty(name = "argumentsInParameterizedTypes", opposite = "arguments", derived = true)
    Type.prototype.getArgumentsInParameterizedTypes = function () {
        return this.typeArgumentsInParameterizedTypes;
    };
    // manyMany.Setter
    Type.prototype.addArgumentsInParameterizedTypes = function (newArgumentsInParameterizedTypes) {
        if (!this.typeArgumentsInParameterizedTypes.has(newArgumentsInParameterizedTypes)) {
            this.typeArgumentsInParameterizedTypes.add(newArgumentsInParameterizedTypes);
            newArgumentsInParameterizedTypes.getArguments().add(this);
        }
    };
    Type.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Type", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    Type.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("container", this.getContainer());
        exporter.addProperty("typeAliases", this.getTypeAliases());
        exporter.addProperty("superInheritances", this.getSuperInheritances());
        exporter.addProperty("subInheritances", this.getSubInheritances());
        exporter.addProperty("behavioursWithDeclaredType", this.getBehavioursWithDeclaredType());
        exporter.addProperty("structuresWithDeclaredType", this.getStructuresWithDeclaredType());
        exporter.addProperty("methods", this.getMethods());
        exporter.addProperty("attributes", this.getAttributes());
        exporter.addProperty("argumentsInParameterizedTypes", this.getArgumentsInParameterizedTypes());
        exporter.addProperty("incomingReferences", this.getIncomingReferences());
    };
    return Type;
}(container_entity_1.ContainerEntity));
exports.Type = Type;
