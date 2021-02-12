"use strict";
exports.__esModule = true;
exports.FamixMseExporter = void 0;
var famix_base_element_1 = require("./famix_base_element");
var FamixMseExporter = /** @class */ (function () {
    function FamixMseExporter(packageClass, element) {
        this.element = element;
        this.buffer = "(" + packageClass + "  (id: " + this.element.id + ")";
    }
    FamixMseExporter.prototype.addProperty = function (name, prop) {
        if (prop === undefined) {
            return;
        }
        if ((prop instanceof Set) && (prop.size === 0)) {
            return;
        }
        if (prop instanceof Set) {
            var valueBuffer = "";
            for (var _i = 0, prop_1 = prop; _i < prop_1.length; _i++) {
                var value = prop_1[_i];
                if (valueBuffer.length > 0) {
                    valueBuffer = valueBuffer + " ";
                }
                if (typeof (value) === "string") {
                    valueBuffer = valueBuffer + ("'" + value + "'");
                }
                else if (value instanceof famix_base_element_1.FamixBaseElement) {
                    valueBuffer = valueBuffer + ("(ref: " + value.id + ")");
                }
                else {
                    valueBuffer = valueBuffer + ("" + value);
                }
            }
            this.buffer = this.buffer + ("\n    (" + name + " " + valueBuffer + ")");
        }
        else if (prop instanceof famix_base_element_1.FamixBaseElement) {
            this.buffer = this.buffer + ("\n    (" + name + " (ref: " + prop.id + "))");
        }
        else if (typeof (prop) === "string") {
            this.buffer = this.buffer + ("\n    (" + name + " '" + prop + "')");
        }
        else {
            this.buffer = this.buffer + ("\n    (" + name + " " + prop + ")");
        }
    };
    FamixMseExporter.prototype.getMSE = function () {
        return this.buffer + ")\n";
    };
    return FamixMseExporter;
}());
exports.FamixMseExporter = FamixMseExporter;
