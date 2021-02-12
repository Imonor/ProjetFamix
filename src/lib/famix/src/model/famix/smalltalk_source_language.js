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
exports.SmalltalkSourceLanguage = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var source_language_1 = require("./../famix/source_language");
var SmalltalkSourceLanguage = /** @class */ (function (_super) {
    __extends(SmalltalkSourceLanguage, _super);
    function SmalltalkSourceLanguage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmalltalkSourceLanguage.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.SmalltalkSourceLanguage", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    SmalltalkSourceLanguage.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
    };
    return SmalltalkSourceLanguage;
}(source_language_1.SourceLanguage));
exports.SmalltalkSourceLanguage = SmalltalkSourceLanguage;
