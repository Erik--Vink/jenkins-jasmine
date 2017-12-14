import DagnummerFieldValidator = require("../../../../../../../ext/knockout/ts/obWebclient/aangifteScherm/validation/fieldValidators/DagnummerFieldValidator");

describe('DagnummerFieldValidator', () => {

    let dagnummerFieldValidator;

    beforeAll(() => {
        dagnummerFieldValidator = new DagnummerFieldValidator();
    });

    beforeEach(() => {
        dagnummerFieldValidator.unmaskedValue = null;
        dagnummerFieldValidator.maskedValue = null;
        dagnummerFieldValidator.minValue = 1;
        dagnummerFieldValidator.maxValue = 365;
    });

    it("fieldName should equal 'dagnummer'", () => {
        expect(dagnummerFieldValidator.getFieldName()).toEqual("dagnummer");
    });

    it('should return invalid range errorMessage when invalid number input is given', () => {
        let inputDagnummer = 366;
        let validationResult = dagnummerFieldValidator.getValidationResult(inputDagnummer);
        let expectedErrorMessage = "dagnummer: De ingevoerde waarde moet liggen tussen 1 en 365";
        expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
    });

    it('should return invalid range errorMessage when invalid number input is given', () => {
        let inputDagnummer = 0;
        let validationResult = dagnummerFieldValidator.getValidationResult(inputDagnummer);
        let expectedErrorMessage = "dagnummer: De ingevoerde waarde moet liggen tussen 1 en 365";
        expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
    });

    it('should return succes when valid number input is given', () => {
        let inputDagnummer = 365;
        let validationResult = dagnummerFieldValidator.getValidationResult(inputDagnummer);
        expect(validationResult.isSuccess()).toBeTruthy();
    });

    it('should return succes when valid number input is given', () => {
        let inputDagnummer = 1;
        let validationResult = dagnummerFieldValidator.getValidationResult(inputDagnummer);
        expect(validationResult.isSuccess()).toBeTruthy();
    });
});
