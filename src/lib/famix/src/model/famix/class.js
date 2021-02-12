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
exports.Class = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var type_1 = require("./../famix/type");
var Class = /** @class */ (function (_super) {
    __extends(Class, _super);
    function Class() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @FameProperty(name = "isTestCase")
    Class.prototype.getIsTestCase = function () {
        return this.classIsTestCase;
    };
    Class.prototype.setIsTestCase = function (classIsTestCase) {
        this.classIsTestCase = classIsTestCase;
    };
    // @FameProperty(name = "isInterface")
    Class.prototype.getIsInterface = function () {
        return this.classIsInterface;
    };
    Class.prototype.setIsInterface = function (classIsInterface) {
        this.classIsInterface = classIsInterface;
    };
    Class.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Class", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    Class.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("isTestCase", this.getIsTestCase());
        exporter.addProperty("isInterface", this.getIsInterface());
    };
    return Class;
}(type_1.Type));
exports.Class = Class;
