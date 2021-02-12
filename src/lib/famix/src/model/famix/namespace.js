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
exports.Namespace = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var scoping_entity_1 = require("./../famix/scoping_entity");
var Namespace = /** @class */ (function (_super) {
    __extends(Namespace, _super);
    function Namespace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @FameProperty(name = "numberOfAttributes")
    Namespace.prototype.getNumberOfAttributes = function () {
        return this.namespaceNumberOfAttributes;
    };
    Namespace.prototype.setNumberOfAttributes = function (namespaceNumberOfAttributes) {
        this.namespaceNumberOfAttributes = namespaceNumberOfAttributes;
    };
    Namespace.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Namespace", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    Namespace.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("numberOfAttributes", this.getNumberOfAttributes());
    };
    return Namespace;
}(scoping_entity_1.ScopingEntity));
exports.Namespace = Namespace;
