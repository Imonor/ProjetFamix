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
exports.Reference = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var association_1 = require("./../famix/association");
var Reference = /** @class */ (function (_super) {
    __extends(Reference, _super);
    function Reference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // oneMany.Getter
    // @FameProperty(name = "source", opposite = "outgoingReferences")
    Reference.prototype.getSource = function () {
        return this.referenceSource;
    };
    // oneMany.Setter
    Reference.prototype.setSource = function (newSource) {
        this.referenceSource = newSource;
        newSource.getOutgoingReferences().add(this);
    };
    // oneMany.Getter
    // @FameProperty(name = "target", opposite = "incomingReferences")
    Reference.prototype.getTarget = function () {
        return this.referenceTarget;
    };
    // oneMany.Setter
    Reference.prototype.setTarget = function (newTarget) {
        this.referenceTarget = newTarget;
        newTarget.getIncomingReferences().add(this);
    };
    Reference.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Reference", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    Reference.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("source", this.getSource());
        exporter.addProperty("target", this.getTarget());
    };
    return Reference;
}(association_1.Association));
exports.Reference = Reference;
