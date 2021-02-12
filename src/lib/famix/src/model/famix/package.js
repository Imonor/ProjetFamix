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
exports.Package = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var scoping_entity_1 = require("./../famix/scoping_entity");
var Package = /** @class */ (function (_super) {
    __extends(Package, _super);
    function Package() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.packageChildNamedEntities = new Set();
        return _this;
    }
    // @FameProperty(name = "numberOfClientPackages")
    Package.prototype.getNumberOfClientPackages = function () {
        return this.packageNumberOfClientPackages;
    };
    Package.prototype.setNumberOfClientPackages = function (packageNumberOfClientPackages) {
        this.packageNumberOfClientPackages = packageNumberOfClientPackages;
    };
    // manyOne.Getter
    // @FameProperty(name = "childNamedEntities", opposite = "parentPackage", derived = true)
    Package.prototype.getChildNamedEntities = function () {
        return this.packageChildNamedEntities;
    };
    // manyOne.Setter
    Package.prototype.addChildNamedEntities = function (packageChildNamedEntities) {
        if (!this.packageChildNamedEntities.has(packageChildNamedEntities)) {
            this.packageChildNamedEntities.add(packageChildNamedEntities);
            packageChildNamedEntities.setParentPackage(this);
        }
    };
    // @FameProperty(name = "numberOfMethods")
    Package.prototype.getNumberOfMethods = function () {
        return this.packageNumberOfMethods;
    };
    Package.prototype.setNumberOfMethods = function (packageNumberOfMethods) {
        this.packageNumberOfMethods = packageNumberOfMethods;
    };
    Package.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Package", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    Package.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("numberOfClientPackages", this.getNumberOfClientPackages());
        exporter.addProperty("numberOfMethods", this.getNumberOfMethods());
        exporter.addProperty("childNamedEntities", this.getChildNamedEntities());
    };
    return Package;
}(scoping_entity_1.ScopingEntity));
exports.Package = Package;
