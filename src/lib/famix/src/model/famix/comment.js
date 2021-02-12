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
exports.Comment = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var sourced_entity_1 = require("./../famix/sourced_entity");
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // oneMany.Getter
    // @FameProperty(name = "container", opposite = "comments")
    Comment.prototype.getContainer = function () {
        return this.commentContainer;
    };
    // oneMany.Setter
    Comment.prototype.setContainer = function (newContainer) {
        this.commentContainer = newContainer;
        newContainer.getComments().add(this);
    };
    // @FameProperty(name = "content")
    Comment.prototype.getContent = function () {
        return this.commentContent;
    };
    Comment.prototype.setContent = function (commentContent) {
        this.commentContent = commentContent;
    };
    Comment.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Comment", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    Comment.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("container", this.getContainer());
        exporter.addProperty("content", this.getContent());
    };
    return Comment;
}(sourced_entity_1.SourcedEntity));
exports.Comment = Comment;
