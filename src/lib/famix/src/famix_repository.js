"use strict";
exports.__esModule = true;
exports.FamixRepository = void 0;
var famix_1 = require("./model/famix");
var famix_2 = require("./model/famix");
var FamixRepository = /** @class */ (function () {
    function FamixRepository() {
        this.elements = new Set();
        this.famixClasses = new Set();
        this.idCounter = 1;
        this.lang = new famix_2.CustomSourceLanguage(this);
        this.lang.setName("TypeScript");
    }
    FamixRepository.getFamixRepo = function () {
        if (this.repo === undefined) {
            this.repo = new FamixRepository();
        }
        return this.repo;
    };
    FamixRepository.clearFamixRepo = function () {
        this.repo = new FamixRepository();
    };
    FamixRepository.prototype.createOrGetFamixClass = function (name, isInterface) {
        var newClass = this.getFamixClass(name);
        if (newClass === undefined) {
            newClass = new famix_1.Class(this);
            newClass.setName(name.toLowerCase());
            newClass.setIsStub(true);
            if ((isInterface !== undefined) && (isInterface)) {
                newClass.setIsInterface(true);
            }
        }
        return newClass;
    };
    FamixRepository.prototype.getFamixClass = function (name) {
        for (var _i = 0, _a = this.famixClasses; _i < _a.length; _i++) {
            var fc = _a[_i];
            if (fc.getName().toLowerCase() === name.toLowerCase()) {
                return fc;
            }
        }
        return undefined;
    };
    FamixRepository.prototype.addElement = function (element) {
        if (element instanceof famix_1.Class) {
            this.famixClasses.add(element);
        }
        else {
            this.elements.add(element);
        }
        element.id = this.idCounter;
        this.idCounter++;
    };
    FamixRepository.prototype.getMSE = function () {
        var ret = "(";
        this.famixClasses.forEach(element => {
            ret = ret + element.getMSE();
        })
        this.elements.forEach(element => {
            ret = ret + element.getMSE();
        })
        return ret + ")";
    };
    return FamixRepository;
}());
exports.FamixRepository = FamixRepository;
