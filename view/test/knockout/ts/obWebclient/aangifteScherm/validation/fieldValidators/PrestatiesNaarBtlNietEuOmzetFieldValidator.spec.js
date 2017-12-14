define(["require", "exports", "../../../../../../../ext/knockout/ts/obWebclient/aangifteScherm/validation/fieldValidators/PrestatiesNaarBtlNietEuOmzetFieldValidator"], function (require, exports, PrestatiesNaarBtlNietEuOmzetFieldValidator) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('PrestatiesNaarBtlNietEuOmzetFieldValidator', function () {
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
        it('should return success when bedrag is succesfully masked', function () {
            var inputBedrag = 600;
            prestatiesNaarBtlNietEuOmzet.mask(inputBedrag);
            var maskValue = "600";
            expect(prestatiesNaarBtlNietEuOmzet.getMaskedValue()).toContain(maskValue);
        });
        it('should return success when bedrag is succesfully masked', function () {
            var inputBedrag = 6000;
            prestatiesNaarBtlNietEuOmzet.mask(inputBedrag);
            var maskValue = "6.000";
            expect(prestatiesNaarBtlNietEuOmzet.getMaskedValue()).toContain(maskValue);
        });
        it('should return success when bedrag is succesfully masked', function () {
            var inputBedrag = 6000000;
            prestatiesNaarBtlNietEuOmzet.mask(inputBedrag);
            var maskValue = "6.000.000";
            expect(prestatiesNaarBtlNietEuOmzet.getMaskedValue()).toContain(maskValue);
        });
        it('should return success when bedrag is succesfully masked en unmasked', function () {
            var inputBedrag = 6000000000;
            prestatiesNaarBtlNietEuOmzet.mask(inputBedrag);
            var maskValue = "6.000.000.000";
            expect(prestatiesNaarBtlNietEuOmzet.getMaskedValue()).toContain(maskValue);
            prestatiesNaarBtlNietEuOmzet.unmask(maskValue);
            expect(prestatiesNaarBtlNietEuOmzet.getUnmaskedValue()).toContain(inputBedrag);
        });
    });
});
