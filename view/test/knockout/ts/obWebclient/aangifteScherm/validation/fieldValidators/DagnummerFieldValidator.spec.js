define(["require", "exports", "../../../../../../../ext/knockout/ts/obWebclient/aangifteScherm/validation/fieldValidators/DagnummerFieldValidator"], function (require, exports, DagnummerFieldValidator) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('DagnummerFieldValidator', function () {
        var dagnummerFieldValidator;
        beforeAll(function () {
            dagnummerFieldValidator = new DagnummerFieldValidator();
        });
        beforeEach(function () {
            dagnummerFieldValidator.unmaskedValue = null;
            dagnummerFieldValidator.maskedValue = null;
            dagnummerFieldValidator.minValue = 1;
            dagnummerFieldValidator.maxValue = 365;
        });
        it("fieldName should equal 'dagnummer'", function () {
            expect(dagnummerFieldValidator.getFieldName()).toEqual("dagnummer");
        });
        it('should return invalid range errorMessage when invalid number input is given', function () {
            var inputDagnummer = 366;
            var validationResult = dagnummerFieldValidator.getValidationResult(inputDagnummer);
            var expectedErrorMessage = "dagnummer: De ingevoerde waarde moet liggen tussen 1 en 365";
            expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
        });
        it('should return invalid range errorMessage when invalid number input is given', function () {
            var inputDagnummer = 0;
            var validationResult = dagnummerFieldValidator.getValidationResult(inputDagnummer);
            var expectedErrorMessage = "dagnummer: De ingevoerde waarde moet liggen tussen 1 en 365";
            expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
        });
        it('should return succes when valid number input is given', function () {
            var inputDagnummer = 365;
            var validationResult = dagnummerFieldValidator.getValidationResult(inputDagnummer);
            expect(validationResult.isSuccess()).toBeTruthy();
        });
        it('should return succes when valid number input is given', function () {
            var inputDagnummer = 1;
            var validationResult = dagnummerFieldValidator.getValidationResult(inputDagnummer);
            expect(validationResult.isSuccess()).toBeTruthy();
        });
    });
});
