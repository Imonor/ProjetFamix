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
exports.Exception = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var entity_1 = require("./../famix/entity");
var Exception = /** @class */ (function (_super) {
    __extends(Exception, _super);
    function Exception() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @FameProperty(name = "exceptionClass")
    Exception.prototype.getExceptionClass = function () {
        return this.exceptionExceptionClass;
    };
    Exception.prototype.setExceptionClass = function (exceptionExceptionClass) {
        this.exceptionExceptionClass = exceptionExceptionClass;
    };
    Exception.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Exception", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    Exception.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("exceptionClass", this.getExceptionClass());
    };
    return Exception;
}(entity_1.Entity));
exports.Exception = Exception;
