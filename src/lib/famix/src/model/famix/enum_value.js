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
exports.EnumValue = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var structural_entity_1 = require("./../famix/structural_entity");
var EnumValue = /** @class */ (function (_super) {
    __extends(EnumValue, _super);
    function EnumValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // oneMany.Getter
    // @FameProperty(name = "parentEnum", opposite = "values")
    EnumValue.prototype.getParentEnum = function () {
        return this.enumValueParentEnum;
    };
    // oneMany.Setter
    EnumValue.prototype.setParentEnum = function (newParentEnum) {
        this.enumValueParentEnum = newParentEnum;
        newParentEnum.getValues().add(this);
    };
    EnumValue.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.EnumValue", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    EnumValue.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("parentEnum", this.getParentEnum());
    };
    return EnumValue;
}(structural_entity_1.StructuralEntity));
exports.EnumValue = EnumValue;
