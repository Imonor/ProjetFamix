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
exports.BehaviouralEntity = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var container_entity_1 = require("./../famix/container_entity");
var BehaviouralEntity = /** @class */ (function (_super) {
    __extends(BehaviouralEntity, _super);
    function BehaviouralEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.behaviouralEntityImplicitVariables = new Set();
        _this.behaviouralEntityLocalVariables = new Set();
        _this.behaviouralEntityOutgoingReferences = new Set();
        _this.behaviouralEntityOutgoingInvocations = new Set();
        _this.behaviouralEntityIncomingInvocations = new Set();
        _this.behaviouralEntityAccesses = new Set();
        _this.behaviouralEntityParameters = new Set();
        return _this;
    }
    // @FameProperty(name = "signature")
    BehaviouralEntity.prototype.getSignature = function () {
        return this.behaviouralEntitySignature;
    };
    BehaviouralEntity.prototype.setSignature = function (behaviouralEntitySignature) {
        this.behaviouralEntitySignature = behaviouralEntitySignature;
    };
    // @FameProperty(name = "numberOfParameters")
    BehaviouralEntity.prototype.getNumberOfParameters = function () {
        return this.behaviouralEntityNumberOfParameters;
    };
    BehaviouralEntity.prototype.setNumberOfParameters = function (behaviouralEntityNumberOfParameters) {
        this.behaviouralEntityNumberOfParameters = behaviouralEntityNumberOfParameters;
    };
    // oneMany.Getter
    // @FameProperty(name = "declaredType", opposite = "behavioursWithDeclaredType")
    BehaviouralEntity.prototype.getDeclaredType = function () {
        return this.behaviouralEntityDeclaredType;
    };
    // oneMany.Setter
    BehaviouralEntity.prototype.setDeclaredType = function (newDeclaredType) {
        this.behaviouralEntityDeclaredType = newDeclaredType;
        newDeclaredType.getBehavioursWithDeclaredType().add(this);
    };
    // @FameProperty(name = "cyclomaticComplexity")
    BehaviouralEntity.prototype.getCyclomaticComplexity = function () {
        return this.behaviouralEntityCyclomaticComplexity;
    };
    BehaviouralEntity.prototype.setCyclomaticComplexity = function (behaviouralEntityCyclomaticComplexity) {
        this.behaviouralEntityCyclomaticComplexity = behaviouralEntityCyclomaticComplexity;
    };
    // @FameProperty(name = "numberOfComments")
    BehaviouralEntity.prototype.getNumberOfComments = function () {
        return this.behaviouralEntityNumberOfComments;
    };
    BehaviouralEntity.prototype.setNumberOfComments = function (behaviouralEntityNumberOfComments) {
        this.behaviouralEntityNumberOfComments = behaviouralEntityNumberOfComments;
    };
    // manyOne.Getter
    // @FameProperty(name = "implicitVariables", opposite = "parentBehaviouralEntity", derived = true)
    BehaviouralEntity.prototype.getImplicitVariables = function () {
        return this.behaviouralEntityImplicitVariables;
    };
    // manyOne.Setter
    BehaviouralEntity.prototype.addImplicitVariables = function (behaviouralEntityImplicitVariables) {
        if (!this.behaviouralEntityImplicitVariables.has(behaviouralEntityImplicitVariables)) {
            this.behaviouralEntityImplicitVariables.add(behaviouralEntityImplicitVariables);
            behaviouralEntityImplicitVariables.setParentBehaviouralEntity(this);
        }
    };
    // manyOne.Getter
    // @FameProperty(name = "localVariables", opposite = "parentBehaviouralEntity", derived = true)
    BehaviouralEntity.prototype.getLocalVariables = function () {
        return this.behaviouralEntityLocalVariables;
    };
    // manyOne.Setter
    BehaviouralEntity.prototype.addLocalVariables = function (behaviouralEntityLocalVariables) {
        if (!this.behaviouralEntityLocalVariables.has(behaviouralEntityLocalVariables)) {
            this.behaviouralEntityLocalVariables.add(behaviouralEntityLocalVariables);
            behaviouralEntityLocalVariables.setParentBehaviouralEntity(this);
        }
    };
    // @FameProperty(name = "numberOfStatements")
    BehaviouralEntity.prototype.getNumberOfStatements = function () {
        return this.behaviouralEntityNumberOfStatements;
    };
    BehaviouralEntity.prototype.setNumberOfStatements = function (behaviouralEntityNumberOfStatements) {
        this.behaviouralEntityNumberOfStatements = behaviouralEntityNumberOfStatements;
    };
    // manyOne.Getter
    // @FameProperty(name = "outgoingReferences", opposite = "source", derived = true)
    BehaviouralEntity.prototype.getOutgoingReferences = function () {
        return this.behaviouralEntityOutgoingReferences;
    };
    // manyOne.Setter
    BehaviouralEntity.prototype.addOutgoingReferences = function (behaviouralEntityOutgoingReferences) {
        if (!this.behaviouralEntityOutgoingReferences.has(behaviouralEntityOutgoingReferences)) {
            this.behaviouralEntityOutgoingReferences.add(behaviouralEntityOutgoingReferences);
            behaviouralEntityOutgoingReferences.setSource(this);
        }
    };
    // @FameProperty(name = "numberOfLinesOfCode")
    BehaviouralEntity.prototype.getNumberOfLinesOfCode = function () {
        return this.behaviouralEntityNumberOfLinesOfCode;
    };
    BehaviouralEntity.prototype.setNumberOfLinesOfCode = function (behaviouralEntityNumberOfLinesOfCode) {
        this.behaviouralEntityNumberOfLinesOfCode = behaviouralEntityNumberOfLinesOfCode;
    };
    // manyOne.Getter
    // @FameProperty(name = "outgoingInvocations", opposite = "sender", derived = true)
    BehaviouralEntity.prototype.getOutgoingInvocations = function () {
        return this.behaviouralEntityOutgoingInvocations;
    };
    // manyOne.Setter
    BehaviouralEntity.prototype.addOutgoingInvocations = function (behaviouralEntityOutgoingInvocations) {
        if (!this.behaviouralEntityOutgoingInvocations.has(behaviouralEntityOutgoingInvocations)) {
            this.behaviouralEntityOutgoingInvocations.add(behaviouralEntityOutgoingInvocations);
            behaviouralEntityOutgoingInvocations.setSender(this);
        }
    };
    // manyMany.Getter
    // @FameProperty(name = "incomingInvocations", opposite = "candidates", derived = true)
    BehaviouralEntity.prototype.getIncomingInvocations = function () {
        return this.behaviouralEntityIncomingInvocations;
    };
    // manyMany.Setter
    BehaviouralEntity.prototype.addIncomingInvocations = function (newIncomingInvocations) {
        if (!this.behaviouralEntityIncomingInvocations.has(newIncomingInvocations)) {
            this.behaviouralEntityIncomingInvocations.add(newIncomingInvocations);
            newIncomingInvocations.getCandidates().add(this);
        }
    };
    // @FameProperty(name = "numberOfConditionals")
    BehaviouralEntity.prototype.getNumberOfConditionals = function () {
        return this.behaviouralEntityNumberOfConditionals;
    };
    BehaviouralEntity.prototype.setNumberOfConditionals = function (behaviouralEntityNumberOfConditionals) {
        this.behaviouralEntityNumberOfConditionals = behaviouralEntityNumberOfConditionals;
    };
    // manyOne.Getter
    // @FameProperty(name = "accesses", opposite = "accessor", derived = true)
    BehaviouralEntity.prototype.getAccesses = function () {
        return this.behaviouralEntityAccesses;
    };
    // manyOne.Setter
    BehaviouralEntity.prototype.addAccesses = function (behaviouralEntityAccesses) {
        if (!this.behaviouralEntityAccesses.has(behaviouralEntityAccesses)) {
            this.behaviouralEntityAccesses.add(behaviouralEntityAccesses);
            behaviouralEntityAccesses.setAccessor(this);
        }
    };
    // manyOne.Getter
    // @FameProperty(name = "parameters", opposite = "parentBehaviouralEntity", derived = true)
    BehaviouralEntity.prototype.getParameters = function () {
        return this.behaviouralEntityParameters;
    };
    // manyOne.Setter
    BehaviouralEntity.prototype.addParameters = function (behaviouralEntityParameters) {
        if (!this.behaviouralEntityParameters.has(behaviouralEntityParameters)) {
            this.behaviouralEntityParameters.add(behaviouralEntityParameters);
            behaviouralEntityParameters.setParentBehaviouralEntity(this);
        }
    };
    BehaviouralEntity.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.BehaviouralEntity", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    BehaviouralEntity.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("signature", this.getSignature());
        exporter.addProperty("numberOfParameters", this.getNumberOfParameters());
        exporter.addProperty("declaredType", this.getDeclaredType());
        exporter.addProperty("cyclomaticComplexity", this.getCyclomaticComplexity());
        exporter.addProperty("numberOfComments", this.getNumberOfComments());
        exporter.addProperty("implicitVariables", this.getImplicitVariables());
        exporter.addProperty("localVariables", this.getLocalVariables());
        exporter.addProperty("numberOfStatements", this.getNumberOfStatements());
        exporter.addProperty("outgoingReferences", this.getOutgoingReferences());
        exporter.addProperty("numberOfLinesOfCode", this.getNumberOfLinesOfCode());
        exporter.addProperty("outgoingInvocations", this.getOutgoingInvocations());
        exporter.addProperty("incomingInvocations", this.getIncomingInvocations());
        exporter.addProperty("numberOfConditionals", this.getNumberOfConditionals());
        exporter.addProperty("accesses", this.getAccesses());
        exporter.addProperty("parameters", this.getParameters());
    };
    return BehaviouralEntity;
}(container_entity_1.ContainerEntity));
exports.BehaviouralEntity = BehaviouralEntity;
