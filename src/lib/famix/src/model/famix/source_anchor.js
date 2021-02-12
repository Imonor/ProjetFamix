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
exports.SourceAnchor = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var entity_1 = require("./../famix/entity");
var SourceAnchor = /** @class */ (function (_super) {
    __extends(SourceAnchor, _super);
    function SourceAnchor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @FameProperty(name = "element", opposite = "sourceAnchor")
    SourceAnchor.prototype.getElement = function () {
        return this.sourceAnchorElement;
    };
    SourceAnchor.prototype.setElement = function (newElement) {
        if (this.sourceAnchorElement === undefined) {
            this.sourceAnchorElement = newElement;
            newElement.setSourceAnchor(this);
        }
    };
    SourceAnchor.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.SourceAnchor", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    SourceAnchor.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("element", this.getElement());
    };
    return SourceAnchor;
}(entity_1.Entity));
exports.SourceAnchor = SourceAnchor;
