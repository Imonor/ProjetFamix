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
exports.CaughtException = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var exception_1 = require("./../famix/exception");
var CaughtException = /** @class */ (function (_super) {
    __extends(CaughtException, _super);
    function CaughtException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // oneMany.Getter
    // @FameProperty(name = "definingMethod", opposite = "caughtExceptions")
    CaughtException.prototype.getDefiningMethod = function () {
        return this.caughtExceptionDefiningMethod;
    };
    // oneMany.Setter
    CaughtException.prototype.setDefiningMethod = function (newDefiningMethod) {
        this.caughtExceptionDefiningMethod = newDefiningMethod;
        newDefiningMethod.getCaughtExceptions().add(this);
    };
    CaughtException.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.CaughtException", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    CaughtException.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("definingMethod", this.getDefiningMethod());
    };
    return CaughtException;
}(exception_1.Exception));
exports.CaughtException = CaughtException;
