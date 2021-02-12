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
exports.CompilationUnit = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var file_1 = require("./../file/file");
var CompilationUnit = /** @class */ (function (_super) {
    __extends(CompilationUnit, _super);
    function CompilationUnit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @FameProperty(name = "module", opposite = "compilationUnit")
    CompilationUnit.prototype.getModule = function () {
        return this.compilationUnitModule;
    };
    CompilationUnit.prototype.setModule = function (newModule) {
        if (this.compilationUnitModule === undefined) {
            this.compilationUnitModule = newModule;
            newModule.setCompilationUnit(this);
        }
    };
    CompilationUnit.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.CompilationUnit", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    CompilationUnit.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("module", this.getModule());
    };
    return CompilationUnit;
}(file_1.File));
exports.CompilationUnit = CompilationUnit;
