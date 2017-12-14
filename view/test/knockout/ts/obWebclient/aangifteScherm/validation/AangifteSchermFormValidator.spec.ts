import AangifteSchermFormValidator = require("../../../../../../ext/knockout/ts/obWebclient/aangifteScherm/validation/validators/AangifteSchermFormValidator");

describe('AangifteSchermFormValidator', () => {

    let aangifteSchermFormValidator;

    beforeAll(() => {
        aangifteSchermFormValidator = new AangifteSchermFormValidator();
    });

    it("dataElementNAme should equal 'aangifteScherm'", () => {
        expect(aangifteSchermFormValidator.dataElementName).toEqual("aangifteScherm");
    });

    it('should return invalid message when invalid C04_2', () => {
        let aangifteSchermDetails=  {
            aangifteSchermDetails: {
                prestatiesNlPriveOmzet: "150",
                prestatiesNlPriveBelasting: "200"
            }
        };

        let validationResult = aangifteSchermFormValidator.getValidationResultForAllCrossFieldValidators(aangifteSchermDetails);
        let expectedErrorMessage = "Belastingbedrag moet lager zijn dan de omzet";
        expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
    });

    it('should return invalid message when invalid C04_3', () => {
        let aangifteSchermDetails=  {
            aangifteSchermDetails: {
                prestatiesNlPriveOmzet: "-150",
                prestatiesNlPriveBelasting: "0"
            }
        };

        let validationResult = aangifteSchermFormValidator.getValidationResultForAllCrossFieldValidators(aangifteSchermDetails);
        let expectedErrorMessage = "Belastingbedrag moet lager zijn dan EUR 0,-";
        expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
    });

    it('should return invalid message when invalid C04_4', () => {
        let aangifteSchermDetails=  {
            aangifteSchermDetails: {
                prestatiesNlPriveOmzet: "150",
                prestatiesNlPriveBelasting: "0"
            }
        };

        let validationResult = aangifteSchermFormValidator.getValidationResultForAllCrossFieldValidators(aangifteSchermDetails);
        let expectedErrorMessage = "Belastingbedrag moet groter zijn dan EUR 0,-";
        expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
    });

    it('should return invalid message when invalid C04_5', () => {
        let aangifteSchermDetails=  {
            aangifteSchermDetails: {
                prestatiesNlPriveOmzet: "-150",
                prestatiesNlPriveBelasting: "-151"
            }
        };

        let validationResult = aangifteSchermFormValidator.getValidationResultForAllCrossFieldValidators(aangifteSchermDetails);
        let expectedErrorMessage = "Belastingbedrag moet minder zijn dan de omzet";
        expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
    });

    it('should return invalid message when invalid C05', () => {
        let aangifteSchermDetails=  {
            aangifteSchermDetails: {
                prestatiesNlStandaardBelasting: "25",
                prestatiesNlStandaardOmzet: "55",
                prestatiesNlVerlaagdBelasting: "75",
                prestatiesNlVerlaagdOmzet: "100",
                prestatiesNlPriveBelasting: "150",
                prestatiesNlPriveOmzet: "175",
                prestatiesNlOverigBelasting: "100",
                prestatiesNlOverigOmzet: "125",
                verleggingNlNaarUBelasting: "150",
                verleggingNlNaarUOmzet: "199",
                prestatiesUitBtlNietEuBelasting: "25",
                prestatiesUitBtlNietEuOmzet: "65",
                prestatiesUitBtlEuBelasting: "25",
                prestatiesUitBtlEuOmzet: "99",
                verschuldigdeOmzetbelasting: "701"
            }
        };

        let validationResult = aangifteSchermFormValidator.getValidationResultForAllCrossFieldValidators(aangifteSchermDetails);
        let expectedErrorMessage = "Berekening van TOTAAL omzetbelasting is niet juist";
        expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
    });

    it('should return invalid message when invalid C06', () => {
        let aangifteSchermDetails=  {
            aangifteSchermDetails: {
                prestatiesNlStandaardBelasting: "25",
                prestatiesNlStandaardOmzet: "55",
                prestatiesNlVerlaagdBelasting: "75",
                prestatiesNlVerlaagdOmzet: "100",
                prestatiesNlPriveBelasting: "150",
                prestatiesNlPriveOmzet: "175",
                prestatiesNlOverigBelasting: "100",
                prestatiesNlOverigOmzet: "125",
                verleggingNlNaarUBelasting: "150",
                verleggingNlNaarUOmzet: "199",
                prestatiesUitBtlNietEuBelasting: "25",
                prestatiesUitBtlNietEuOmzet: "65",
                prestatiesUitBtlEuBelasting: "25",
                prestatiesUitBtlEuOmzet: "99",
                verschuldigdeOmzetbelasting: "550",
                voorbelasting: "25",
                verminderingKor: "100",
                totaalTeBetalenTerugTeVragen: "424"
            }
        };

        let validationResult = aangifteSchermFormValidator.getValidationResultForAllCrossFieldValidators(aangifteSchermDetails);
        let expectedErrorMessage = "Berekening van TOTAAL te betalen/terug te ontvangen is niet juist";
        expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
    });

    it('should return success when valid C05 en C06', () => {
        let aangifteSchermDetails=  {
            aangifteSchermDetails: {
                prestatiesNlStandaardBelasting: "25",
                prestatiesNlStandaardOmzet: "55",
                prestatiesNlVerlaagdBelasting: "75",
                prestatiesNlVerlaagdOmzet: "100",
                prestatiesNlPriveBelasting: "150",
                prestatiesNlPriveOmzet: "175",
                prestatiesNlOverigBelasting: "100",
                prestatiesNlOverigOmzet: "125",
                verleggingNlNaarUBelasting: "150",
                verleggingNlNaarUOmzet: "199",
                prestatiesUitBtlNietEuBelasting: "25",
                prestatiesUitBtlNietEuOmzet: "65",
                prestatiesUitBtlEuBelasting: "25",
                prestatiesUitBtlEuOmzet: "99",
                verschuldigdeOmzetbelasting: "550",
                voorbelasting: "25",
                verminderingKor: "100",
                totaalTeBetalenTerugTeVragen: "425"
            }
        };

        let validationResult = aangifteSchermFormValidator.getValidationResultForAllCrossFieldValidators(aangifteSchermDetails);
        expect(validationResult.isSuccess()).toBeTruthy();
    });

});
