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
exports.AnnotationInstanceAttribute = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var entity_1 = require("./../famix/entity");
var AnnotationInstanceAttribute = /** @class */ (function (_super) {
    __extends(AnnotationInstanceAttribute, _super);
    function AnnotationInstanceAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // oneMany.Getter
    // @FameProperty(name = "annotationTypeAttribute", opposite = "annotationAttributeInstances")
    AnnotationInstanceAttribute.prototype.getAnnotationTypeAttribute = function () {
        return this.annotationInstanceAttributeAnnotationTypeAttribute;
    };
    // oneMany.Setter
    AnnotationInstanceAttribute.prototype.setAnnotationTypeAttribute = function (newAnnotationTypeAttribute) {
        this.annotationInstanceAttributeAnnotationTypeAttribute = newAnnotationTypeAttribute;
        newAnnotationTypeAttribute.getAnnotationAttributeInstances().add(this);
    };
    // oneMany.Getter
    // @FameProperty(name = "parentAnnotationInstance", opposite = "attributes")
    AnnotationInstanceAttribute.prototype.getParentAnnotationInstance = function () {
        return this.annotationInstanceAttributeParentAnnotationInstance;
    };
    // oneMany.Setter
    AnnotationInstanceAttribute.prototype.setParentAnnotationInstance = function (newParentAnnotationInstance) {
        this.annotationInstanceAttributeParentAnnotationInstance = newParentAnnotationInstance;
        newParentAnnotationInstance.getAttributes().add(this);
    };
    // @FameProperty(name = "value")
    AnnotationInstanceAttribute.prototype.getValue = function () {
        return this.annotationInstanceAttributeValue;
    };
    AnnotationInstanceAttribute.prototype.setValue = function (annotationInstanceAttributeValue) {
        this.annotationInstanceAttributeValue = annotationInstanceAttributeValue;
    };
    AnnotationInstanceAttribute.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.AnnotationInstanceAttribute", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    AnnotationInstanceAttribute.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("annotationTypeAttribute", this.getAnnotationTypeAttribute());
        exporter.addProperty("parentAnnotationInstance", this.getParentAnnotationInstance());
        exporter.addProperty("value", this.getValue());
    };
    return AnnotationInstanceAttribute;
}(entity_1.Entity));
exports.AnnotationInstanceAttribute = AnnotationInstanceAttribute;
