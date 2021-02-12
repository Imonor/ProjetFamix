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
exports.FileAnchor = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var abstract_file_anchor_1 = require("./../famix/abstract_file_anchor");
var FileAnchor = /** @class */ (function (_super) {
    __extends(FileAnchor, _super);
    function FileAnchor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @FameProperty(name = "endLine")
    FileAnchor.prototype.getEndLine = function () {
        return this.fileAnchorEndLine;
    };
    FileAnchor.prototype.setEndLine = function (fileAnchorEndLine) {
        this.fileAnchorEndLine = fileAnchorEndLine;
    };
    // @FameProperty(name = "endColumn")
    FileAnchor.prototype.getEndColumn = function () {
        return this.fileAnchorEndColumn;
    };
    FileAnchor.prototype.setEndColumn = function (fileAnchorEndColumn) {
        this.fileAnchorEndColumn = fileAnchorEndColumn;
    };
    // @FameProperty(name = "startColumn")
    FileAnchor.prototype.getStartColumn = function () {
        return this.fileAnchorStartColumn;
    };
    FileAnchor.prototype.setStartColumn = function (fileAnchorStartColumn) {
        this.fileAnchorStartColumn = fileAnchorStartColumn;
    };
    // @FameProperty(name = "startLine")
    FileAnchor.prototype.getStartLine = function () {
        return this.fileAnchorStartLine;
    };
    FileAnchor.prototype.setStartLine = function (fileAnchorStartLine) {
        this.fileAnchorStartLine = fileAnchorStartLine;
    };
    FileAnchor.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.FileAnchor", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    FileAnchor.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("endLine", this.getEndLine());
        exporter.addProperty("endColumn", this.getEndColumn());
        exporter.addProperty("startColumn", this.getStartColumn());
        exporter.addProperty("startLine", this.getStartLine());
    };
    return FileAnchor;
}(abstract_file_anchor_1.AbstractFileAnchor));
exports.FileAnchor = FileAnchor;
