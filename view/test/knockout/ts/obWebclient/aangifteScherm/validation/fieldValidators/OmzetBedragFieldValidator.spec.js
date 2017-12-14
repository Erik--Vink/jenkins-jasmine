define(["require", "exports", "../../../../../../../ext/knockout/ts/obWebclient/aangifteScherm/validation/fieldValidators/PrestatiesNaarBtlNietEuOmzetFieldValidator"], function (require, exports, PrestatiesNaarBtlNietEuOmzetFieldValidator) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('OmzetBedragFieldValidator', function () {
        var prestatiesNaarBtlNietEuOmzet;
        beforeAll(function () {
            prestatiesNaarBtlNietEuOmzet = new PrestatiesNaarBtlNietEuOmzetFieldValidator();
        });
        beforeEach(function () {
            prestatiesNaarBtlNietEuOmzet.unmaskedValue = null;
            prestatiesNaarBtlNietEuOmzet.maskedValue = null;
        });
        it("fieldName should equal 'prestatiesNaarBtlNietEuOmzet'", function () {
            expect(prestatiesNaarBtlNietEuOmzet.getFieldName()).toEqual("prestatiesNaarBtlNietEuOmzet");
        });
        it('should return invalid range errorMessage when invalid number input is given', function () {
            var inputBedrag = 0;
            var validationResult = prestatiesNaarBtlNietEuOmzet.getValidationResult(inputBedrag);
            var expectedErrorMessage = prestatiesNaarBtlNietEuOmzet.getFieldName() + ": Omzetbedrag mag niet nul zijn";
            expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
        });
        it('should return success', function () {
            var inputBedrag = 50;
            var validationResult = prestatiesNaarBtlNietEuOmzet.getValidationResult(inputBedrag);
            expect(validationResult.isSuccess()).toBeTruthy();
        });
        it('should return success', function () {
            var inputBedrag = null;
            var validationResult = prestatiesNaarBtlNietEuOmzet.getValidationResult(inputBedrag);
            expect(validationResult.isSuccess()).toBeTruthy();
        });
    });
});
