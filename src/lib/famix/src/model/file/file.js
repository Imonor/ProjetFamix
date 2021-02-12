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
exports.File = void 0;
var famix_mse_exporter_1 = require("../../famix_mse_exporter");
var abstract_file_1 = require("./../file/abstract_file");
var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @FameProperty(name = "numberOfInternalClones")
    File.prototype.getNumberOfInternalClones = function () {
        return this.fileNumberOfInternalClones;
    };
    File.prototype.setNumberOfInternalClones = function (fileNumberOfInternalClones) {
        this.fileNumberOfInternalClones = fileNumberOfInternalClones;
    };
    // @FameProperty(name = "totalNumberOfLinesOfText")
    File.prototype.getTotalNumberOfLinesOfText = function () {
        return this.fileTotalNumberOfLinesOfText;
    };
    File.prototype.setTotalNumberOfLinesOfText = function (fileTotalNumberOfLinesOfText) {
        this.fileTotalNumberOfLinesOfText = fileTotalNumberOfLinesOfText;
    };
    // @FameProperty(name = "numberOfKiloBytes")
    File.prototype.getNumberOfKiloBytes = function () {
        return this.fileNumberOfKiloBytes;
    };
    File.prototype.setNumberOfKiloBytes = function (fileNumberOfKiloBytes) {
        this.fileNumberOfKiloBytes = fileNumberOfKiloBytes;
    };
    // @FameProperty(name = "numberOfDuplicatedFiles")
    File.prototype.getNumberOfDuplicatedFiles = function () {
        return this.fileNumberOfDuplicatedFiles;
    };
    File.prototype.setNumberOfDuplicatedFiles = function (fileNumberOfDuplicatedFiles) {
        this.fileNumberOfDuplicatedFiles = fileNumberOfDuplicatedFiles;
    };
    // @FameProperty(name = "numberOfEmptyLinesOfText")
    File.prototype.getNumberOfEmptyLinesOfText = function () {
        return this.fileNumberOfEmptyLinesOfText;
    };
    File.prototype.setNumberOfEmptyLinesOfText = function (fileNumberOfEmptyLinesOfText) {
        this.fileNumberOfEmptyLinesOfText = fileNumberOfEmptyLinesOfText;
    };
    // @FameProperty(name = "numberOfCharacters")
    File.prototype.getNumberOfCharacters = function () {
        return this.fileNumberOfCharacters;
    };
    File.prototype.setNumberOfCharacters = function (fileNumberOfCharacters) {
        this.fileNumberOfCharacters = fileNumberOfCharacters;
    };
    // @FameProperty(name = "averageNumberOfCharactersPerLine")
    File.prototype.getAverageNumberOfCharactersPerLine = function () {
        return this.fileAverageNumberOfCharactersPerLine;
    };
    File.prototype.setAverageNumberOfCharactersPerLine = function (fileAverageNumberOfCharactersPerLine) {
        this.fileAverageNumberOfCharactersPerLine = fileAverageNumberOfCharactersPerLine;
    };
    // @FameProperty(name = "numberOfLinesOfText")
    File.prototype.getNumberOfLinesOfText = function () {
        return this.fileNumberOfLinesOfText;
    };
    File.prototype.setNumberOfLinesOfText = function (fileNumberOfLinesOfText) {
        this.fileNumberOfLinesOfText = fileNumberOfLinesOfText;
    };
    // @FameProperty(name = "numberOfExternalClones")
    File.prototype.getNumberOfExternalClones = function () {
        return this.fileNumberOfExternalClones;
    };
    File.prototype.setNumberOfExternalClones = function (fileNumberOfExternalClones) {
        this.fileNumberOfExternalClones = fileNumberOfExternalClones;
    };
    // @FameProperty(name = "numberOfInternalMultiplications")
    File.prototype.getNumberOfInternalMultiplications = function () {
        return this.fileNumberOfInternalMultiplications;
    };
    File.prototype.setNumberOfInternalMultiplications = function (fileNumberOfInternalMultiplications) {
        this.fileNumberOfInternalMultiplications = fileNumberOfInternalMultiplications;
    };
    // @FameProperty(name = "numberOfBytes")
    File.prototype.getNumberOfBytes = function () {
        return this.fileNumberOfBytes;
    };
    File.prototype.setNumberOfBytes = function (fileNumberOfBytes) {
        this.fileNumberOfBytes = fileNumberOfBytes;
    };
    File.prototype.getMSE = function () {
        var mse = new famix_mse_exporter_1.FamixMseExporter("FILE.File", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    };
    File.prototype.addPropertiesToExporter = function (exporter) {
        _super.prototype.addPropertiesToExporter.call(this, exporter);
        exporter.addProperty("averageNumberOfCharactersPerLine", this.getAverageNumberOfCharactersPerLine());
        exporter.addProperty("numberOfInternalClones", this.getNumberOfInternalClones());
        exporter.addProperty("totalNumberOfLinesOfText", this.getTotalNumberOfLinesOfText());
        exporter.addProperty("numberOfKiloBytes", this.getNumberOfKiloBytes());
        exporter.addProperty("numberOfDuplicatedFiles", this.getNumberOfDuplicatedFiles());
        exporter.addProperty("numberOfLinesOfText", this.getNumberOfLinesOfText());
        exporter.addProperty("numberOfEmptyLinesOfText", this.getNumberOfEmptyLinesOfText());
        exporter.addProperty("numberOfCharacters", this.getNumberOfCharacters());
        exporter.addProperty("numberOfExternalClones", this.getNumberOfExternalClones());
        exporter.addProperty("numberOfInternalMultiplications", this.getNumberOfInternalMultiplications());
        exporter.addProperty("numberOfBytes", this.getNumberOfBytes());
    };
    return File;
}(abstract_file_1.AbstractFile));
exports.File = File;
