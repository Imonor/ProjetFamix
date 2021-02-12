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
exports.GlobalVariable = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var structural_entity_1 = require("./../famix/structural_entity");
var GlobalVariable = /** @class */ (function (_super) {
    __extends(GlobalVariable, _super);
    function GlobalVariable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // oneMany.Getter
    // @FameProperty(name = "parentScope", opposite = "globalVariables")
    GlobalVariable.prototype.getParentScope = function () {
        return this.globalVariableParentScope;
    };
    // oneMany.Setter
    GlobalVariable.prototype.setParentScope = function (newParentScope) {
        this.globalVariableParentScope = newParentScope;
        newParentScope.getGlobalVariables().add(this);
    };
    // @FameProperty(name = "parentModule")
    GlobalVariable.prototype.getParentModule = function () {
        return this.globalVariableParentModule;
    };
    GlobalVariable.prototype.setParentModule = function (globalVariableParentModule) {
        this.globalVariableParentModule = globalVariableParentModule;
    };
    GlobalVariable.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.GlobalVariable", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    GlobalVariable.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("parentScope", this.getParentScope());
        exporter.addProperty("parentModule", this.getParentModule());
    };
    return GlobalVariable;
}(structural_entity_1.StructuralEntity));
exports.GlobalVariable = GlobalVariable;
