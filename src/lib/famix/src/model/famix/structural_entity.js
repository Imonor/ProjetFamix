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
exports.StructuralEntity = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var leaf_entity_1 = require("./../famix/leaf_entity");
var StructuralEntity = /** @class */ (function (_super) {
    __extends(StructuralEntity, _super);
    function StructuralEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.structuralEntityIncomingAccesses = new Set();
        _this.structuralEntityDereferencedInvocations = new Set();
        return _this;
    }
    // manyOne.Getter
    // @FameProperty(name = "incomingAccesses", opposite = "variable", derived = true)
    StructuralEntity.prototype.getIncomingAccesses = function () {
        return this.structuralEntityIncomingAccesses;
    };
    // manyOne.Setter
    StructuralEntity.prototype.addIncomingAccesses = function (structuralEntityIncomingAccesses) {
        if (!this.structuralEntityIncomingAccesses.has(structuralEntityIncomingAccesses)) {
            this.structuralEntityIncomingAccesses.add(structuralEntityIncomingAccesses);
            structuralEntityIncomingAccesses.setVariable(this);
        }
    };
    // oneMany.Getter
    // @FameProperty(name = "declaredType", opposite = "structuresWithDeclaredType")
    StructuralEntity.prototype.getDeclaredType = function () {
        return this.structuralEntityDeclaredType;
    };
    // oneMany.Setter
    StructuralEntity.prototype.setDeclaredType = function (newDeclaredType) {
        this.structuralEntityDeclaredType = newDeclaredType;
        newDeclaredType.getStructuresWithDeclaredType().add(this);
    };
    // manyOne.Getter
    // @FameProperty(name = "dereferencedInvocations", opposite = "referencer", derived = true)
    StructuralEntity.prototype.getDereferencedInvocations = function () {
        return this.structuralEntityDereferencedInvocations;
    };
    // manyOne.Setter
    StructuralEntity.prototype.addDereferencedInvocations = function (structuralEntityDereferencedInvocations) {
        if (!this.structuralEntityDereferencedInvocations.has(structuralEntityDereferencedInvocations)) {
            this.structuralEntityDereferencedInvocations.add(structuralEntityDereferencedInvocations);
            structuralEntityDereferencedInvocations.setReferencer(this);
        }
    };
    StructuralEntity.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.StructuralEntity", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    StructuralEntity.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("incomingAccesses", this.getIncomingAccesses());
        exporter.addProperty("declaredType", this.getDeclaredType());
        exporter.addProperty("dereferencedInvocations", this.getDereferencedInvocations());
    };
    return StructuralEntity;
}(leaf_entity_1.LeafEntity));
exports.StructuralEntity = StructuralEntity;
