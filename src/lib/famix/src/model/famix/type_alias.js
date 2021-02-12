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
exports.TypeAlias = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var type_1 = require("./../famix/type");
var TypeAlias = /** @class */ (function (_super) {
    __extends(TypeAlias, _super);
    function TypeAlias() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // oneMany.Getter
    // @FameProperty(name = "aliasedType", opposite = "typeAliases")
    TypeAlias.prototype.getAliasedType = function () {
        return this.typeAliasAliasedType;
    };
    // oneMany.Setter
    TypeAlias.prototype.setAliasedType = function (newAliasedType) {
        this.typeAliasAliasedType = newAliasedType;
        newAliasedType.getTypeAliases().add(this);
    };
    TypeAlias.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.TypeAlias", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    TypeAlias.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("aliasedType", this.getAliasedType());
    };
    return TypeAlias;
}(type_1.Type));
exports.TypeAlias = TypeAlias;
