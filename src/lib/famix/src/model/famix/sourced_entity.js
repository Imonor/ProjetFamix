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
exports.SourcedEntity = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var entity_1 = require("./../famix/entity");
var SourcedEntity = /** @class */ (function (_super) {
    __extends(SourcedEntity, _super);
    function SourcedEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sourcedEntityComments = new Set();
        return _this;
    }
    // @FameProperty(name = "sourceAnchor", opposite = "element")
    SourcedEntity.prototype.getSourceAnchor = function () {
        return this.sourcedEntitySourceAnchor;
    };
    SourcedEntity.prototype.setSourceAnchor = function (newSourceAnchor) {
        if (this.sourcedEntitySourceAnchor === undefined) {
            this.sourcedEntitySourceAnchor = newSourceAnchor;
            newSourceAnchor.setElement(this);
        }
    };
    // manyOne.Getter
    // @FameProperty(name = "comments", opposite = "container", derived = true)
    SourcedEntity.prototype.getComments = function () {
        return this.sourcedEntityComments;
    };
    // manyOne.Setter
    SourcedEntity.prototype.addComments = function (sourcedEntityComments) {
        if (!this.sourcedEntityComments.has(sourcedEntityComments)) {
            this.sourcedEntityComments.add(sourcedEntityComments);
            sourcedEntityComments.setContainer(this);
        }
    };
    // oneMany.Getter
    // @FameProperty(name = "declaredSourceLanguage", opposite = "sourcedEntities")
    SourcedEntity.prototype.getDeclaredSourceLanguage = function () {
        return this.sourcedEntityDeclaredSourceLanguage;
    };
    // oneMany.Setter
    SourcedEntity.prototype.setDeclaredSourceLanguage = function (newDeclaredSourceLanguage) {
        this.sourcedEntityDeclaredSourceLanguage = newDeclaredSourceLanguage;
        newDeclaredSourceLanguage.getSourcedEntities().add(this);
    };
    SourcedEntity.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.SourcedEntity", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    SourcedEntity.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("sourceAnchor", this.getSourceAnchor());
        exporter.addProperty("comments", this.getComments());
        exporter.addProperty("declaredSourceLanguage", this.getDeclaredSourceLanguage());
    };
    return SourcedEntity;
}(entity_1.Entity));
exports.SourcedEntity = SourcedEntity;
