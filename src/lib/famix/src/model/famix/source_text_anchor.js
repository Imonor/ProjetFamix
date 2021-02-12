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
exports.SourceTextAnchor = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var source_anchor_1 = require("./../famix/source_anchor");
var SourceTextAnchor = /** @class */ (function (_super) {
    __extends(SourceTextAnchor, _super);
    function SourceTextAnchor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @FameProperty(name = "source")
    SourceTextAnchor.prototype.getSource = function () {
        return this.sourceTextAnchorSource;
    };
    SourceTextAnchor.prototype.setSource = function (sourceTextAnchorSource) {
        this.sourceTextAnchorSource = sourceTextAnchorSource;
    };
    SourceTextAnchor.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.SourceTextAnchor", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    SourceTextAnchor.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("source", this.getSource());
    };
    return SourceTextAnchor;
}(source_anchor_1.SourceAnchor));
exports.SourceTextAnchor = SourceTextAnchor;
