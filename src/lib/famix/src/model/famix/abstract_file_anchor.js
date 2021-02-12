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
exports.AbstractFileAnchor = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var source_anchor_1 = require("./../famix/source_anchor");
var AbstractFileAnchor = /** @class */ (function (_super) {
    __extends(AbstractFileAnchor, _super);
    function AbstractFileAnchor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @FameProperty(name = "fileName")
    AbstractFileAnchor.prototype.getFileName = function () {
        return this.abstractFileAnchorFileName;
    };
    AbstractFileAnchor.prototype.setFileName = function (abstractFileAnchorFileName) {
        this.abstractFileAnchorFileName = abstractFileAnchorFileName;
    };
    AbstractFileAnchor.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.AbstractFileAnchor", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    AbstractFileAnchor.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("fileName", this.getFileName());
    };
    return AbstractFileAnchor;
}(source_anchor_1.SourceAnchor));
exports.AbstractFileAnchor = AbstractFileAnchor;
