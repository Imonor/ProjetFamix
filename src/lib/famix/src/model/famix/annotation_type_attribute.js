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
exports.AnnotationTypeAttribute = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var attribute_1 = require("./../famix/attribute");
var AnnotationTypeAttribute = /** @class */ (function (_super) {
    __extends(AnnotationTypeAttribute, _super);
    function AnnotationTypeAttribute() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.annotationTypeAttributeAnnotationAttributeInstances = new Set();
        return _this;
    }
    // manyOne.Getter
    // @FameProperty(name = "annotationAttributeInstances", opposite = "annotationTypeAttribute", derived = true)
    AnnotationTypeAttribute.prototype.getAnnotationAttributeInstances = function () {
        return this.annotationTypeAttributeAnnotationAttributeInstances;
    };
    // manyOne.Setter
    AnnotationTypeAttribute.prototype.addAnnotationAttributeInstances = function (annotationTypeAttributeAnnotationAttributeInstances) {
        if (!this.annotationTypeAttributeAnnotationAttributeInstances.has(annotationTypeAttributeAnnotationAttributeInstances)) {
            this.annotationTypeAttributeAnnotationAttributeInstances.add(annotationTypeAttributeAnnotationAttributeInstances);
            annotationTypeAttributeAnnotationAttributeInstances.setAnnotationTypeAttribute(this);
        }
    };
    AnnotationTypeAttribute.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.AnnotationTypeAttribute", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    AnnotationTypeAttribute.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("annotationAttributeInstances", this.getAnnotationAttributeInstances());
    };
    return AnnotationTypeAttribute;
}(attribute_1.Attribute));
exports.AnnotationTypeAttribute = AnnotationTypeAttribute;
