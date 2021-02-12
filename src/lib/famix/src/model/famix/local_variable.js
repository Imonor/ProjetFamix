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
exports.LocalVariable = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var structural_entity_1 = require("./../famix/structural_entity");
var LocalVariable = /** @class */ (function (_super) {
    __extends(LocalVariable, _super);
    function LocalVariable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // oneMany.Getter
    // @FameProperty(name = "parentBehaviouralEntity", opposite = "localVariables")
    LocalVariable.prototype.getParentBehaviouralEntity = function () {
        return this.localVariableParentBehaviouralEntity;
    };
    // oneMany.Setter
    LocalVariable.prototype.setParentBehaviouralEntity = function (newParentBehaviouralEntity) {
        this.localVariableParentBehaviouralEntity = newParentBehaviouralEntity;
        newParentBehaviouralEntity.getLocalVariables().add(this);
    };
    LocalVariable.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.LocalVariable", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    LocalVariable.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("parentBehaviouralEntity", this.getParentBehaviouralEntity());
    };
    return LocalVariable;
}(structural_entity_1.StructuralEntity));
exports.LocalVariable = LocalVariable;
