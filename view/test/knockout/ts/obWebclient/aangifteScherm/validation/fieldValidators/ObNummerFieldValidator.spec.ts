import ObNummerFieldValidator = require("../../../../../../../ext/knockout/ts/obWebclient/aangifteScherm/validation/fieldValidators/ObNummerFieldValidator");

describe('ObNummerFieldValidator', () => {

    let obNummerFieldValidator;

    beforeAll(() => {
        obNummerFieldValidator = new ObNummerFieldValidator();
    });

    beforeEach(() => {
        obNummerFieldValidator.unmaskedValue = null;
        obNummerFieldValidator.maskedValue = null;
    });

    it("fieldName should equal 'obNummer'", () => {
        expect(obNummerFieldValidator.getFieldName()).toEqual("obNummer");
    });

    it('should return invalid elf proef errorMessage when invalid number input is given', () => {
        let inputObnummer = 1234;
        let validationResult = obNummerFieldValidator.getValidationResult(inputObnummer);
        let expectedErrorMessage = "De ingevoerde waarde voldoet niet aan de 11 proef";
        expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
    });
});
