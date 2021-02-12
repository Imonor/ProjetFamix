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
exports.Function = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var behavioural_entity_1 = require("./../famix/behavioural_entity");
var Function = /** @class */ (function (_super) {
    __extends(Function, _super);
    function Function() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // oneMany.Getter
    // @FameProperty(name = "container", opposite = "functions")
    Function.prototype.getContainer = function () {
        return this.functionContainer;
    };
    // oneMany.Setter
    Function.prototype.setContainer = function (newContainer) {
        this.functionContainer = newContainer;
        newContainer.getFunctions().add(this);
    };
    // @FameProperty(name = "parentModule")
    Function.prototype.getParentModule = function () {
        return this.functionParentModule;
    };
    Function.prototype.setParentModule = function (functionParentModule) {
        this.functionParentModule = functionParentModule;
    };
    Function.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Function", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    Function.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("container", this.getContainer());
        exporter.addProperty("parentModule", this.getParentModule());
    };
    return Function;
}(behavioural_entity_1.BehaviouralEntity));
exports.Function = Function;
