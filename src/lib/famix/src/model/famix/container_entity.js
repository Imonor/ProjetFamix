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
exports.ContainerEntity = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var named_entity_1 = require("./../famix/named_entity");
var ContainerEntity = /** @class */ (function (_super) {
    __extends(ContainerEntity, _super);
    function ContainerEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.containerEntityTypes = new Set();
        _this.containerEntityFunctions = new Set();
        _this.containerEntityDefinedAnnotationTypes = new Set();
        return _this;
    }
    // manyOne.Getter
    // @FameProperty(name = "types", opposite = "container", derived = true)
    ContainerEntity.prototype.getTypes = function () {
        return this.containerEntityTypes;
    };
    // manyOne.Setter
    ContainerEntity.prototype.addTypes = function (containerEntityTypes) {
        if (!this.containerEntityTypes.has(containerEntityTypes)) {
            this.containerEntityTypes.add(containerEntityTypes);
            containerEntityTypes.setContainer(this);
        }
    };
    // manyOne.Getter
    // @FameProperty(name = "functions", opposite = "container", derived = true)
    ContainerEntity.prototype.getFunctions = function () {
        return this.containerEntityFunctions;
    };
    // manyOne.Setter
    ContainerEntity.prototype.addFunctions = function (containerEntityFunctions) {
        if (!this.containerEntityFunctions.has(containerEntityFunctions)) {
            this.containerEntityFunctions.add(containerEntityFunctions);
            containerEntityFunctions.setContainer(this);
        }
    };
    // manyOne.Getter
    // @FameProperty(name = "definedAnnotationTypes", opposite = "container", derived = true)
    ContainerEntity.prototype.getDefinedAnnotationTypes = function () {
        return this.containerEntityDefinedAnnotationTypes;
    };
    // manyOne.Setter
    ContainerEntity.prototype.addDefinedAnnotationTypes = function (containerEntityDefinedAnnotationTypes) {
        if (!this.containerEntityDefinedAnnotationTypes.has(containerEntityDefinedAnnotationTypes)) {
            this.containerEntityDefinedAnnotationTypes.add(containerEntityDefinedAnnotationTypes);
            containerEntityDefinedAnnotationTypes.setContainer(this);
        }
    };
    ContainerEntity.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.ContainerEntity", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    ContainerEntity.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("types", this.getTypes());
        exporter.addProperty("functions", this.getFunctions());
        exporter.addProperty("definedAnnotationTypes", this.getDefinedAnnotationTypes());
    };
    return ContainerEntity;
}(named_entity_1.NamedEntity));
exports.ContainerEntity = ContainerEntity;
