define(["require", "exports", "../../../../../../../ext/knockout/ts/obWebclient/aangifteScherm/validation/fieldValidators/ObNummerFieldValidator"], function (require, exports, ObNummerFieldValidator) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('ObNummerFieldValidator', function () {
        var obNummerFieldValidator;
        beforeAll(function () {
            obNummerFieldValidator = new ObNummerFieldValidator();
        });
        beforeEach(function () {
            obNummerFieldValidator.unmaskedValue = null;
            obNummerFieldValidator.maskedValue = null;
        });
        it("fieldName should equal 'obNummer'", function () {
            expect(obNummerFieldValidator.getFieldName()).toEqual("obNummer");
        });
        it('should return invalid elf proef errorMessage when invalid number input is given', function () {
            var inputObnummer = 1234;
            var validationResult = obNummerFieldValidator.getValidationResult(inputObnummer);
            var expectedErrorMessage = "De ingevoerde waarde voldoet niet aan de 11 proef";
            expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
        });
    });
});
