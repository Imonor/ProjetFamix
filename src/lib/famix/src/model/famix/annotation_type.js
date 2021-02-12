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
exports.AnnotationType = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var type_1 = require("./../famix/type");
var AnnotationType = /** @class */ (function (_super) {
    __extends(AnnotationType, _super);
    function AnnotationType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.annotationTypeInstances = new Set();
        return _this;
    }
    // oneMany.Getter
    // @FameProperty(name = "container", opposite = "definedAnnotationTypes")
    AnnotationType.prototype.getContainer = function () {
        return this.annotationTypeContainer;
    };
    // oneMany.Setter
    AnnotationType.prototype.setContainer = function (newContainer) {
        this.annotationTypeContainer = newContainer;
        newContainer.getDefinedAnnotationTypes().add(this);
    };
    // manyOne.Getter
    // @FameProperty(name = "instances", opposite = "annotationType", derived = true)
    AnnotationType.prototype.getInstances = function () {
        return this.annotationTypeInstances;
    };
    // manyOne.Setter
    AnnotationType.prototype.addInstances = function (annotationTypeInstances) {
        if (!this.annotationTypeInstances.has(annotationTypeInstances)) {
            this.annotationTypeInstances.add(annotationTypeInstances);
            annotationTypeInstances.setAnnotationType(this);
        }
    };
    AnnotationType.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.AnnotationType", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    AnnotationType.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("container", this.getContainer());
        exporter.addProperty("instances", this.getInstances());
    };
    return AnnotationType;
}(type_1.Type));
exports.AnnotationType = AnnotationType;
