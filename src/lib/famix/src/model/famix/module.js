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
exports.Module = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var scoping_entity_1 = require("./../famix/scoping_entity");
var Module = /** @class */ (function (_super) {
    __extends(Module, _super);
    function Module() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @FameProperty(name = "compilationUnit", opposite = "module")
    Module.prototype.getCompilationUnit = function () {
        return this.moduleCompilationUnit;
    };
    Module.prototype.setCompilationUnit = function (newCompilationUnit) {
        if (this.moduleCompilationUnit === undefined) {
            this.moduleCompilationUnit = newCompilationUnit;
            newCompilationUnit.setModule(this);
        }
    };
    Module.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Module", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    Module.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("compilationUnit", this.getCompilationUnit());
    };
    return Module;
}(scoping_entity_1.ScopingEntity));
exports.Module = Module;
