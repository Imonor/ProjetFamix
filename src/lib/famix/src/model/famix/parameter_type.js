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
exports.ParameterType = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var type_1 = require("./../famix/type");
var ParameterType = /** @class */ (function (_super) {
    __extends(ParameterType, _super);
    function ParameterType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParameterType.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.ParameterType", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    ParameterType.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
    };
    return ParameterType;
}(type_1.Type));
exports.ParameterType = ParameterType;
