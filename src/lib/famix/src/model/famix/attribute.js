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
exports.Attribute = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var structural_entity_1 = require("./../famix/structural_entity");
var Attribute = /** @class */ (function (_super) {
    __extends(Attribute, _super);
    function Attribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @FameProperty(name = "hasClassScope")
    Attribute.prototype.getHasClassScope = function () {
        return this.attributeHasClassScope;
    };
    Attribute.prototype.setHasClassScope = function (attributeHasClassScope) {
        this.attributeHasClassScope = attributeHasClassScope;
    };
    // oneMany.Getter
    // @FameProperty(name = "parentType", opposite = "attributes")
    Attribute.prototype.getParentType = function () {
        return this.attributeParentType;
    };
    // oneMany.Setter
    Attribute.prototype.setParentType = function (newParentType) {
        this.attributeParentType = newParentType;
        newParentType.getAttributes().add(this);
    };
    Attribute.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Attribute", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    Attribute.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("hasClassScope", this.getHasClassScope());
        exporter.addProperty("parentType", this.getParentType());
    };
    return Attribute;
}(structural_entity_1.StructuralEntity));
exports.Attribute = Attribute;
