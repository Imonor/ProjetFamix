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
exports.IndexedFileAnchor = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var abstract_file_anchor_1 = require("./../famix/abstract_file_anchor");
var IndexedFileAnchor = /** @class */ (function (_super) {
    __extends(IndexedFileAnchor, _super);
    function IndexedFileAnchor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @FameProperty(name = "startPos")
    IndexedFileAnchor.prototype.getStartPos = function () {
        return this.indexedFileAnchorStartPos;
    };
    IndexedFileAnchor.prototype.setStartPos = function (indexedFileAnchorStartPos) {
        this.indexedFileAnchorStartPos = indexedFileAnchorStartPos;
    };
    // @FameProperty(name = "endPos")
    IndexedFileAnchor.prototype.getEndPos = function () {
        return this.indexedFileAnchorEndPos;
    };
    IndexedFileAnchor.prototype.setEndPos = function (indexedFileAnchorEndPos) {
        this.indexedFileAnchorEndPos = indexedFileAnchorEndPos;
    };
    IndexedFileAnchor.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.IndexedFileAnchor", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    IndexedFileAnchor.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("startPos", this.getStartPos());
        exporter.addProperty("endPos", this.getEndPos());
    };
    return IndexedFileAnchor;
}(abstract_file_anchor_1.AbstractFileAnchor));
exports.IndexedFileAnchor = IndexedFileAnchor;
