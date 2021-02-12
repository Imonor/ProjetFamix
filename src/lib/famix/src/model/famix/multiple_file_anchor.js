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
exports.MultipleFileAnchor = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var source_anchor_1 = require("./../famix/source_anchor");
var MultipleFileAnchor = /** @class */ (function (_super) {
    __extends(MultipleFileAnchor, _super);
    function MultipleFileAnchor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.multipleFileAnchorAllFiles = new Set();
        return _this;
    }
    // @FameProperty(name = "allFiles")
    // many.getter
    MultipleFileAnchor.prototype.getAllFiles = function () {
        return this.multipleFileAnchorAllFiles;
    };
    // many.Setter
    MultipleFileAnchor.prototype.addAllFiles = function (newAllFiles) {
        if (!this.multipleFileAnchorAllFiles.has(newAllFiles)) {
            this.multipleFileAnchorAllFiles.add(newAllFiles);
        }
    };
    MultipleFileAnchor.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.MultipleFileAnchor", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    MultipleFileAnchor.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("allFiles", this.getAllFiles());
    };
    return MultipleFileAnchor;
}(source_anchor_1.SourceAnchor));
exports.MultipleFileAnchor = MultipleFileAnchor;
