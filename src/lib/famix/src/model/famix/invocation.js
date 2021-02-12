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
exports.Invocation = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var association_1 = require("./../famix/association");
var Invocation = /** @class */ (function (_super) {
    __extends(Invocation, _super);
    function Invocation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.invocationCandidates = new Set();
        return _this;
    }
    // manyMany.Getter
    // @FameProperty(name = "candidates", opposite = "incomingInvocations")
    Invocation.prototype.getCandidates = function () {
        return this.invocationCandidates;
    };
    // manyMany.Setter
    Invocation.prototype.addCandidates = function (newCandidates) {
        if (!this.invocationCandidates.has(newCandidates)) {
            this.invocationCandidates.add(newCandidates);
            newCandidates.getIncomingInvocations().add(this);
        }
    };
    // oneMany.Getter
    // @FameProperty(name = "receiver", opposite = "receivingInvocations")
    Invocation.prototype.getReceiver = function () {
        return this.invocationReceiver;
    };
    // oneMany.Setter
    Invocation.prototype.setReceiver = function (newReceiver) {
        this.invocationReceiver = newReceiver;
        newReceiver.getReceivingInvocations().add(this);
    };
    // oneMany.Getter
    // @FameProperty(name = "sender", opposite = "outgoingInvocations")
    Invocation.prototype.getSender = function () {
        return this.invocationSender;
    };
    // oneMany.Setter
    Invocation.prototype.setSender = function (newSender) {
        this.invocationSender = newSender;
        newSender.getOutgoingInvocations().add(this);
    };
    // @FameProperty(name = "signature")
    Invocation.prototype.getSignature = function () {
        return this.invocationSignature;
    };
    Invocation.prototype.setSignature = function (invocationSignature) {
        this.invocationSignature = invocationSignature;
    };
    // @FameProperty(name = "receiverSourceCode")
    Invocation.prototype.getReceiverSourceCode = function () {
        return this.invocationReceiverSourceCode;
    };
    Invocation.prototype.setReceiverSourceCode = function (invocationReceiverSourceCode) {
        this.invocationReceiverSourceCode = invocationReceiverSourceCode;
    };
    Invocation.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Invocation", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    Invocation.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("candidates", this.getCandidates());
        exporter.addProperty("receiver", this.getReceiver());
        exporter.addProperty("sender", this.getSender());
        exporter.addProperty("signature", this.getSignature());
        exporter.addProperty("receiverSourceCode", this.getReceiverSourceCode());
    };
    return Invocation;
}(association_1.Association));
exports.Invocation = Invocation;
