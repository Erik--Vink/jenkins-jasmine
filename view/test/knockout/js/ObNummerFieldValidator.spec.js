"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObNummerFieldValidator = require("../../../ext/knockout/ts/obWebclient/aangifteScherm/validation/fieldValidators/ObNummerFieldValidator");
describe('ObNummerFieldValidator', function () {
    var obNummerFieldValidator;
    beforeAll(function () {
        obNummerFieldValidator = new ObNummerFieldValidator();
    });
    it("fieldName should equal 'obNummer'", function () {
        expect(obNummerFieldValidator.getFieldName()).toEqual("obNummerX");
    });
});
