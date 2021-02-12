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
exports.AnnotationInstance = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var entity_1 = require("./../famix/entity");
var AnnotationInstance = /** @class */ (function (_super) {
    __extends(AnnotationInstance, _super);
    function AnnotationInstance() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.annotationInstanceAttributes = new Set();
        return _this;
    }
    // oneMany.Getter
    // @FameProperty(name = "annotatedEntity", opposite = "annotationInstances")
    AnnotationInstance.prototype.getAnnotatedEntity = function () {
        return this.annotationInstanceAnnotatedEntity;
    };
    // oneMany.Setter
    AnnotationInstance.prototype.setAnnotatedEntity = function (newAnnotatedEntity) {
        this.annotationInstanceAnnotatedEntity = newAnnotatedEntity;
        newAnnotatedEntity.getAnnotationInstances().add(this);
    };
    // oneMany.Getter
    // @FameProperty(name = "annotationType", opposite = "instances")
    AnnotationInstance.prototype.getAnnotationType = function () {
        return this.annotationInstanceAnnotationType;
    };
    // oneMany.Setter
    AnnotationInstance.prototype.setAnnotationType = function (newAnnotationType) {
        this.annotationInstanceAnnotationType = newAnnotationType;
        newAnnotationType.getInstances().add(this);
    };
    // manyOne.Getter
    // @FameProperty(name = "attributes", opposite = "parentAnnotationInstance", derived = true)
    AnnotationInstance.prototype.getAttributes = function () {
        return this.annotationInstanceAttributes;
    };
    // manyOne.Setter
    AnnotationInstance.prototype.addAttributes = function (annotationInstanceAttributes) {
        if (!this.annotationInstanceAttributes.has(annotationInstanceAttributes)) {
            this.annotationInstanceAttributes.add(annotationInstanceAttributes);
            annotationInstanceAttributes.setParentAnnotationInstance(this);
        }
    };
    AnnotationInstance.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.AnnotationInstance", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    AnnotationInstance.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("annotatedEntity", this.getAnnotatedEntity());
        exporter.addProperty("annotationType", this.getAnnotationType());
        exporter.addProperty("attributes", this.getAttributes());
    };
    return AnnotationInstance;
}(entity_1.Entity));
exports.AnnotationInstance = AnnotationInstance;
