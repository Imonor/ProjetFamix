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
exports.ParameterizedType = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var type_1 = require("./../famix/type");
var ParameterizedType = /** @class */ (function (_super) {
    __extends(ParameterizedType, _super);
    function ParameterizedType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.parameterizedTypeArguments = new Set();
        return _this;
    }
    // oneMany.Getter
    // @FameProperty(name = "parameterizableClass", opposite = "parameterizedTypes")
    ParameterizedType.prototype.getParameterizableClass = function () {
        return this.parameterizedTypeParameterizableClass;
    };
    // oneMany.Setter
    ParameterizedType.prototype.setParameterizableClass = function (newParameterizableClass) {
        this.parameterizedTypeParameterizableClass = newParameterizableClass;
        newParameterizableClass.getParameterizedTypes().add(this);
    };
    // manyMany.Getter
    // @FameProperty(name = "arguments", opposite = "argumentsInParameterizedTypes")
    ParameterizedType.prototype.getArguments = function () {
        return this.parameterizedTypeArguments;
    };
    // manyMany.Setter
    ParameterizedType.prototype.addArguments = function (newArguments) {
        if (!this.parameterizedTypeArguments.has(newArguments)) {
            this.parameterizedTypeArguments.add(newArguments);
            newArguments.getArgumentsInParameterizedTypes().add(this);
        }
    };
    ParameterizedType.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.ParameterizedType", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    ParameterizedType.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("parameterizableClass", this.getParameterizableClass());
        exporter.addProperty("arguments", this.getArguments());
    };
    return ParameterizedType;
}(type_1.Type));
exports.ParameterizedType = ParameterizedType;
