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
exports.Inheritance = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var association_1 = require("./../famix/association");
var Inheritance = /** @class */ (function (_super) {
    __extends(Inheritance, _super);
    function Inheritance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // oneMany.Getter
    // @FameProperty(name = "superclass", opposite = "subInheritances")
    Inheritance.prototype.getSuperclass = function () {
        return this.inheritanceSuperclass;
    };
    // oneMany.Setter
    Inheritance.prototype.setSuperclass = function (newSuperclass) {
        this.inheritanceSuperclass = newSuperclass;
        newSuperclass.getSubInheritances().add(this);
    };
    // oneMany.Getter
    // @FameProperty(name = "subclass", opposite = "superInheritances")
    Inheritance.prototype.getSubclass = function () {
        return this.inheritanceSubclass;
    };
    // oneMany.Setter
    Inheritance.prototype.setSubclass = function (newSubclass) {
        this.inheritanceSubclass = newSubclass;
        newSubclass.getSuperInheritances().add(this);
    };
    Inheritance.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Inheritance", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    Inheritance.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("superclass", this.getSuperclass());
        exporter.addProperty("subclass", this.getSubclass());
    };
    return Inheritance;
}(association_1.Association));
exports.Inheritance = Inheritance;
