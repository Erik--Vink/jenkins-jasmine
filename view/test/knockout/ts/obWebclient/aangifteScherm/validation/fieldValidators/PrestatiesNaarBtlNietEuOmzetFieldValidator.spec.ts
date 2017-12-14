import PrestatiesNaarBtlNietEuOmzetFieldValidator = require("../../../../../../../ext/knockout/ts/obWebclient/aangifteScherm/validation/fieldValidators/PrestatiesNaarBtlNietEuOmzetFieldValidator");

describe('PrestatiesNaarBtlNietEuOmzetFieldValidator', () => {

    let prestatiesNaarBtlNietEuOmzet;

    beforeAll(() => {
        prestatiesNaarBtlNietEuOmzet = new PrestatiesNaarBtlNietEuOmzetFieldValidator();
    });

    beforeEach(() => {
        prestatiesNaarBtlNietEuOmzet.unmaskedValue = null;
        prestatiesNaarBtlNietEuOmzet.maskedValue = null;
    });

    it("fieldName should equal 'prestatiesNaarBtlNietEuOmzet'", () => {
        expect(prestatiesNaarBtlNietEuOmzet.getFieldName()).toEqual("prestatiesNaarBtlNietEuOmzet");
    });

    it('should return success when bedrag is succesfully masked', () => {
        let inputBedrag = 600;
        prestatiesNaarBtlNietEuOmzet.mask(inputBedrag);
        let maskValue = "600";
        expect(prestatiesNaarBtlNietEuOmzet.getMaskedValue()).toContain(maskValue);
    });

    it('should return success when bedrag is succesfully masked', () => {
        let inputBedrag = 6000;
        prestatiesNaarBtlNietEuOmzet.mask(inputBedrag);
        let maskValue = "6.000";
        expect(prestatiesNaarBtlNietEuOmzet.getMaskedValue()).toContain(maskValue);
    });

    it('should return success when bedrag is succesfully masked', () => {
        let inputBedrag = 6000000;
        prestatiesNaarBtlNietEuOmzet.mask(inputBedrag);
        let maskValue = "6.000.000";
        expect(prestatiesNaarBtlNietEuOmzet.getMaskedValue()).toContain(maskValue);
    });

    it('should return success when bedrag is succesfully masked en unmasked', () => {
        let inputBedrag = 6000000000;
        prestatiesNaarBtlNietEuOmzet.mask(inputBedrag);
        let maskValue = "6.000.000.000";
        expect(prestatiesNaarBtlNietEuOmzet.getMaskedValue()).toContain(maskValue);
        prestatiesNaarBtlNietEuOmzet.unmask(maskValue);
        expect(prestatiesNaarBtlNietEuOmzet.getUnmaskedValue()).toContain(inputBedrag);
    });
});
