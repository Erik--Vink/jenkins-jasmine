import PrestatiesNaarBtlNietEuOmzetFieldValidator = require("../../../../../../../ext/knockout/ts/obWebclient/aangifteScherm/validation/fieldValidators/PrestatiesNaarBtlNietEuOmzetFieldValidator");

describe('OmzetBedragFieldValidator', () => {

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

    it('should return invalid range errorMessage when invalid number input is given', () => {
        let inputBedrag = 0;
        let validationResult = prestatiesNaarBtlNietEuOmzet.getValidationResult(inputBedrag);
        let expectedErrorMessage = prestatiesNaarBtlNietEuOmzet.getFieldName() + ": Omzetbedrag mag niet nul zijn";
        expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
    });

    it('should return success', () => {
        let inputBedrag = 50;
        let validationResult = prestatiesNaarBtlNietEuOmzet.getValidationResult(inputBedrag);
        expect(validationResult.isSuccess()).toBeTruthy();
    });

    it('should return success', () => {
        let inputBedrag = null;
        let validationResult = prestatiesNaarBtlNietEuOmzet.getValidationResult(inputBedrag);
        expect(validationResult.isSuccess()).toBeTruthy();
    });

   });
