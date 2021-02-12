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
exports.ParameterizableClass = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var class_1 = require("./../famix/class");
var ParameterizableClass = /** @class */ (function (_super) {
    __extends(ParameterizableClass, _super);
    function ParameterizableClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.parameterizableClassParameterizedTypes = new Set();
        return _this;
    }
    // manyOne.Getter
    // @FameProperty(name = "parameterizedTypes", opposite = "parameterizableClass", derived = true)
    ParameterizableClass.prototype.getParameterizedTypes = function () {
        return this.parameterizableClassParameterizedTypes;
    };
    // manyOne.Setter
    ParameterizableClass.prototype.addParameterizedTypes = function (parameterizableClassParameterizedTypes) {
        if (!this.parameterizableClassParameterizedTypes.has(parameterizableClassParameterizedTypes)) {
            this.parameterizableClassParameterizedTypes.add(parameterizableClassParameterizedTypes);
            parameterizableClassParameterizedTypes.setParameterizableClass(this);
        }
    };
    ParameterizableClass.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.ParameterizableClass", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    ParameterizableClass.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("parameterizedTypes", this.getParameterizedTypes());
    };
    return ParameterizableClass;
}(class_1.Class));
exports.ParameterizableClass = ParameterizableClass;
