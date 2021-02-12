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
exports.ThrownException = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var exception_1 = require("./../famix/exception");
var ThrownException = /** @class */ (function (_super) {
    __extends(ThrownException, _super);
    function ThrownException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // oneMany.Getter
    // @FameProperty(name = "definingMethod", opposite = "thrownExceptions")
    ThrownException.prototype.getDefiningMethod = function () {
        return this.thrownExceptionDefiningMethod;
    };
    // oneMany.Setter
    ThrownException.prototype.setDefiningMethod = function (newDefiningMethod) {
        this.thrownExceptionDefiningMethod = newDefiningMethod;
        newDefiningMethod.getThrownExceptions().add(this);
    };
    ThrownException.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.ThrownException", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    ThrownException.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("definingMethod", this.getDefiningMethod());
    };
    return ThrownException;
}(exception_1.Exception));
exports.ThrownException = ThrownException;
