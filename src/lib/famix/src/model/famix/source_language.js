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
exports.SourceLanguage = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var entity_1 = require("./../famix/entity");
var SourceLanguage = /** @class */ (function (_super) {
    __extends(SourceLanguage, _super);
    function SourceLanguage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sourceLanguageSourcedEntities = new Set();
        return _this;
    }
    // manyOne.Getter
    // @FameProperty(name = "sourcedEntities", opposite = "declaredSourceLanguage", derived = true)
    SourceLanguage.prototype.getSourcedEntities = function () {
        return this.sourceLanguageSourcedEntities;
    };
    // manyOne.Setter
    SourceLanguage.prototype.addSourcedEntities = function (sourceLanguageSourcedEntities) {
        if (!this.sourceLanguageSourcedEntities.has(sourceLanguageSourcedEntities)) {
            this.sourceLanguageSourcedEntities.add(sourceLanguageSourcedEntities);
            sourceLanguageSourcedEntities.setDeclaredSourceLanguage(this);
        }
    };
    SourceLanguage.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.SourceLanguage", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    SourceLanguage.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("sourcedEntities", this.getSourcedEntities());
    };
    return SourceLanguage;
}(entity_1.Entity));
exports.SourceLanguage = SourceLanguage;
