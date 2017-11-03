"use strict";
///<reference path="../../node_modules/@types/jasmine/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
var ObnummerFieldValidator = require("../knockout/ts/obnieuw/aangifte/validation/fieldValidators/ObnummerFieldValidator");
describe('ObnummerFieldValidator', function () {
    it("should say 'hello world!'", function () {
        var obnummerFieldValidator = new ObnummerFieldValidator();
        expect(obnummerFieldValidator.getFieldName()).toEqual("hello world!");
    });
});
