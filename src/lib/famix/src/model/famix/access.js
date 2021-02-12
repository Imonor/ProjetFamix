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
exports.Access = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var association_1 = require("./../famix/association");
var Access = /** @class */ (function (_super) {
    __extends(Access, _super);
    function Access() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // oneMany.Getter
    // @FameProperty(name = "accessor", opposite = "accesses")
    Access.prototype.getAccessor = function () {
        return this.accessAccessor;
    };
    // oneMany.Setter
    Access.prototype.setAccessor = function (newAccessor) {
        this.accessAccessor = newAccessor;
        newAccessor.getAccesses().add(this);
    };
    // oneMany.Getter
    // @FameProperty(name = "variable", opposite = "incomingAccesses")
    Access.prototype.getVariable = function () {
        return this.accessVariable;
    };
    // oneMany.Setter
    Access.prototype.setVariable = function (newVariable) {
        this.accessVariable = newVariable;
        newVariable.getIncomingAccesses().add(this);
    };
    // @FameProperty(name = "isWrite")
    Access.prototype.getIsWrite = function () {
        return this.accessIsWrite;
    };
    Access.prototype.setIsWrite = function (accessIsWrite) {
        this.accessIsWrite = accessIsWrite;
    };
    Access.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Access", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    Access.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("accessor", this.getAccessor());
        exporter.addProperty("variable", this.getVariable());
        exporter.addProperty("isWrite", this.getIsWrite());
    };
    return Access;
}(association_1.Association));
exports.Access = Access;
