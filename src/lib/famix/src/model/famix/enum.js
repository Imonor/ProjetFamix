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
exports.Enum = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var type_1 = require("./../famix/type");
var Enum = /** @class */ (function (_super) {
    __extends(Enum, _super);
    function Enum() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enumValues = new Set();
        return _this;
    }
    // manyOne.Getter
    // @FameProperty(name = "values", opposite = "parentEnum", derived = true)
    Enum.prototype.getValues = function () {
        return this.enumValues;
    };
    // manyOne.Setter
    Enum.prototype.addValues = function (enumValues) {
        if (!this.enumValues.has(enumValues)) {
            this.enumValues.add(enumValues);
            enumValues.setParentEnum(this);
        }
    };
    Enum.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Enum", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    Enum.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("values", this.getValues());
    };
    return Enum;
}(type_1.Type));
exports.Enum = Enum;
