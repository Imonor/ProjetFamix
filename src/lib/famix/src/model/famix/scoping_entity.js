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
exports.ScopingEntity = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var container_entity_1 = require("./../famix/container_entity");
var ScopingEntity = /** @class */ (function (_super) {
    __extends(ScopingEntity, _super);
    function ScopingEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scopingEntityGlobalVariables = new Set();
        _this.scopingEntityChildScopes = new Set();
        return _this;
    }
    // manyOne.Getter
    // @FameProperty(name = "globalVariables", opposite = "parentScope", derived = true)
    ScopingEntity.prototype.getGlobalVariables = function () {
        return this.scopingEntityGlobalVariables;
    };
    // manyOne.Setter
    ScopingEntity.prototype.addGlobalVariables = function (scopingEntityGlobalVariables) {
        if (!this.scopingEntityGlobalVariables.has(scopingEntityGlobalVariables)) {
            this.scopingEntityGlobalVariables.add(scopingEntityGlobalVariables);
            scopingEntityGlobalVariables.setParentScope(this);
        }
    };
    // oneMany.Getter
    // @FameProperty(name = "parentScope", opposite = "childScopes")
    ScopingEntity.prototype.getParentScope = function () {
        return this.scopingEntityParentScope;
    };
    // oneMany.Setter
    ScopingEntity.prototype.setParentScope = function (newParentScope) {
        this.scopingEntityParentScope = newParentScope;
        newParentScope.getChildScopes().add(this);
    };
    // manyOne.Getter
    // @FameProperty(name = "childScopes", opposite = "parentScope", derived = true)
    ScopingEntity.prototype.getChildScopes = function () {
        return this.scopingEntityChildScopes;
    };
    // manyOne.Setter
    ScopingEntity.prototype.addChildScopes = function (scopingEntityChildScopes) {
        if (!this.scopingEntityChildScopes.has(scopingEntityChildScopes)) {
            this.scopingEntityChildScopes.add(scopingEntityChildScopes);
            scopingEntityChildScopes.setParentScope(this);
        }
    };
    ScopingEntity.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.ScopingEntity", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    ScopingEntity.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("globalVariables", this.getGlobalVariables());
        exporter.addProperty("parentScope", this.getParentScope());
        exporter.addProperty("childScopes", this.getChildScopes());
    };
    return ScopingEntity;
}(container_entity_1.ContainerEntity));
exports.ScopingEntity = ScopingEntity;
