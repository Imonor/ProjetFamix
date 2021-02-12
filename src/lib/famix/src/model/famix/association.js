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
exports.Association = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var sourced_entity_1 = require("./../famix/sourced_entity");
var Association = /** @class */ (function (_super) {
    __extends(Association, _super);
    function Association() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @FameProperty(name = "next", opposite = "previous", derived = true)
    Association.prototype.getNext = function () {
        return this.associationNext;
    };
    Association.prototype.setNext = function (newNext) {
        if (this.associationNext === undefined) {
            this.associationNext = newNext;
            newNext.setPrevious(this);
        }
    };
    // @FameProperty(name = "previous", opposite = "next")
    Association.prototype.getPrevious = function () {
        return this.associationPrevious;
    };
    Association.prototype.setPrevious = function (newPrevious) {
        if (this.associationPrevious === undefined) {
            this.associationPrevious = newPrevious;
            newPrevious.setNext(this);
        }
    };
    Association.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Association", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    Association.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("next", this.getNext());
        exporter.addProperty("previous", this.getPrevious());
    };
    return Association;
}(sourced_entity_1.SourcedEntity));
exports.Association = Association;
