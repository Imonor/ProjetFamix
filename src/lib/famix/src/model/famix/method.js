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
exports.Method = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var behavioural_entity_1 = require("./../famix/behavioural_entity");
var Method = /** @class */ (function (_super) {
    __extends(Method, _super);
    function Method() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.methodThrownExceptions = new Set();
        _this.methodCaughtExceptions = new Set();
        _this.methodDeclaredExceptions = new Set();
        return _this;
    }
    // @FameProperty(name = "kind")
    Method.prototype.getKind = function () {
        return this.methodKind;
    };
    Method.prototype.setKind = function (methodKind) {
        this.methodKind = methodKind;
    };
    // manyOne.Getter
    // @FameProperty(name = "thrownExceptions", opposite = "definingMethod", derived = true)
    Method.prototype.getThrownExceptions = function () {
        return this.methodThrownExceptions;
    };
    // manyOne.Setter
    Method.prototype.addThrownExceptions = function (methodThrownExceptions) {
        if (!this.methodThrownExceptions.has(methodThrownExceptions)) {
            this.methodThrownExceptions.add(methodThrownExceptions);
            methodThrownExceptions.setDefiningMethod(this);
        }
    };
    // manyOne.Getter
    // @FameProperty(name = "caughtExceptions", opposite = "definingMethod", derived = true)
    Method.prototype.getCaughtExceptions = function () {
        return this.methodCaughtExceptions;
    };
    // manyOne.Setter
    Method.prototype.addCaughtExceptions = function (methodCaughtExceptions) {
        if (!this.methodCaughtExceptions.has(methodCaughtExceptions)) {
            this.methodCaughtExceptions.add(methodCaughtExceptions);
            methodCaughtExceptions.setDefiningMethod(this);
        }
    };
    // @FameProperty(name = "hasClassScope")
    Method.prototype.getHasClassScope = function () {
        return this.methodHasClassScope;
    };
    Method.prototype.setHasClassScope = function (methodHasClassScope) {
        this.methodHasClassScope = methodHasClassScope;
    };
    // oneMany.Getter
    // @FameProperty(name = "parentType", opposite = "methods")
    Method.prototype.getParentType = function () {
        return this.methodParentType;
    };
    // oneMany.Setter
    Method.prototype.setParentType = function (newParentType) {
        this.methodParentType = newParentType;
        newParentType.getMethods().add(this);
    };
    // @FameProperty(name = "timeStamp")
    Method.prototype.getTimeStamp = function () {
        return this.methodTimeStamp;
    };
    Method.prototype.setTimeStamp = function (methodTimeStamp) {
        this.methodTimeStamp = methodTimeStamp;
    };
    // manyOne.Getter
    // @FameProperty(name = "declaredExceptions", opposite = "definingMethod", derived = true)
    Method.prototype.getDeclaredExceptions = function () {
        return this.methodDeclaredExceptions;
    };
    // manyOne.Setter
    Method.prototype.addDeclaredExceptions = function (methodDeclaredExceptions) {
        if (!this.methodDeclaredExceptions.has(methodDeclaredExceptions)) {
            this.methodDeclaredExceptions.add(methodDeclaredExceptions);
            methodDeclaredExceptions.setDefiningMethod(this);
        }
    };
    // @FameProperty(name = "category")
    Method.prototype.getCategory = function () {
        return this.methodCategory;
    };
    Method.prototype.setCategory = function (methodCategory) {
        this.methodCategory = methodCategory;
    };
    Method.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Method", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    Method.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("timeStamp", this.getTimeStamp());
        exporter.addProperty("kind", this.getKind());
        exporter.addProperty("thrownExceptions", this.getThrownExceptions());
        exporter.addProperty("caughtExceptions", this.getCaughtExceptions());
        exporter.addProperty("declaredExceptions", this.getDeclaredExceptions());
        exporter.addProperty("hasClassScope", this.getHasClassScope());
        exporter.addProperty("category", this.getCategory());
        exporter.addProperty("parentType", this.getParentType());
    };
    return Method;
}(behavioural_entity_1.BehaviouralEntity));
exports.Method = Method;
