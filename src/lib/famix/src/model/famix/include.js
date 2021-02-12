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
exports.Include = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var association_1 = require("./../famix/association");
var Include = /** @class */ (function (_super) {
    __extends(Include, _super);
    function Include() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @FameProperty(name = "source")
    Include.prototype.getSource = function () {
        return this.includeSource;
    };
    Include.prototype.setSource = function (includeSource) {
        this.includeSource = includeSource;
    };
    // @FameProperty(name = "target")
    Include.prototype.getTarget = function () {
        return this.includeTarget;
    };
    Include.prototype.setTarget = function (includeTarget) {
        this.includeTarget = includeTarget;
    };
    Include.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Include", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    Include.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("source", this.getSource());
        exporter.addProperty("target", this.getTarget());
    };
    return Include;
}(association_1.Association));
exports.Include = Include;
