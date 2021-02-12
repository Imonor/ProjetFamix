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
exports.NamedEntity = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var sourced_entity_1 = require("./../famix/sourced_entity");
var NamedEntity = /** @class */ (function (_super) {
    __extends(NamedEntity, _super);
    function NamedEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.namedEntityReceivingInvocations = new Set();
        _this.namedEntityModifiers = new Set();
        _this.namedEntityAnnotationInstances = new Set();
        return _this;
    }
    // manyOne.Getter
    // @FameProperty(name = "receivingInvocations", opposite = "receiver", derived = true)
    NamedEntity.prototype.getReceivingInvocations = function () {
        return this.namedEntityReceivingInvocations;
    };
    // manyOne.Setter
    NamedEntity.prototype.addReceivingInvocations = function (namedEntityReceivingInvocations) {
        if (!this.namedEntityReceivingInvocations.has(namedEntityReceivingInvocations)) {
            this.namedEntityReceivingInvocations.add(namedEntityReceivingInvocations);
            namedEntityReceivingInvocations.setReceiver(this);
        }
    };
    // @FameProperty(name = "modifiers")
    // many.getter
    NamedEntity.prototype.getModifiers = function () {
        return this.namedEntityModifiers;
    };
    // many.Setter
    NamedEntity.prototype.addModifiers = function (newModifiers) {
        if (!this.namedEntityModifiers.has(newModifiers)) {
            this.namedEntityModifiers.add(newModifiers);
        }
    };
    // @FameProperty(name = "isStub")
    NamedEntity.prototype.getIsStub = function () {
        return this.namedEntityIsStub;
    };
    NamedEntity.prototype.setIsStub = function (namedEntityIsStub) {
        this.namedEntityIsStub = namedEntityIsStub;
    };
    // @FameProperty(name = "name")
    NamedEntity.prototype.getName = function () {
        return this.namedEntityName;
    };
    NamedEntity.prototype.setName = function (namedEntityName) {
        this.namedEntityName = namedEntityName;
    };
    // manyOne.Getter
    // @FameProperty(name = "annotationInstances", opposite = "annotatedEntity", derived = true)
    NamedEntity.prototype.getAnnotationInstances = function () {
        return this.namedEntityAnnotationInstances;
    };
    // manyOne.Setter
    NamedEntity.prototype.addAnnotationInstances = function (namedEntityAnnotationInstances) {
        if (!this.namedEntityAnnotationInstances.has(namedEntityAnnotationInstances)) {
            this.namedEntityAnnotationInstances.add(namedEntityAnnotationInstances);
            namedEntityAnnotationInstances.setAnnotatedEntity(this);
        }
    };
    // oneMany.Getter
    // @FameProperty(name = "parentPackage", opposite = "childNamedEntities")
    NamedEntity.prototype.getParentPackage = function () {
        return this.namedEntityParentPackage;
    };
    // oneMany.Setter
    NamedEntity.prototype.setParentPackage = function (newParentPackage) {
        this.namedEntityParentPackage = newParentPackage;
        newParentPackage.getChildNamedEntities().add(this);
    };
    NamedEntity.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.NamedEntity", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    NamedEntity.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("isStub", this.getIsStub());
        exporter.addProperty("receivingInvocations", this.getReceivingInvocations());
        exporter.addProperty("name", this.getName());
        exporter.addProperty("modifiers", this.getModifiers());
        exporter.addProperty("annotationInstances", this.getAnnotationInstances());
        exporter.addProperty("parentPackage", this.getParentPackage());
    };
    return NamedEntity;
}(sourced_entity_1.SourcedEntity));
exports.NamedEntity = NamedEntity;
