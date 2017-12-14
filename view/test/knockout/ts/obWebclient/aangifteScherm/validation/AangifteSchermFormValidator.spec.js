define(["require", "exports", "../../../../../../ext/knockout/ts/obWebclient/aangifteScherm/validation/validators/AangifteSchermFormValidator"], function (require, exports, AangifteSchermFormValidator) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('AangifteSchermFormValidator', function () {
        var aangifteSchermFormValidator;
        beforeAll(function () {
            aangifteSchermFormValidator = new AangifteSchermFormValidator();
        });
        it("dataElementNAme should equal 'aangifteScherm'", function () {
            expect(aangifteSchermFormValidator.dataElementName).toEqual("aangifteScherm");
        });
        it('should return invalid message when invalid C04_2', function () {
            var aangifteSchermDetails = {
                aangifteSchermDetails: {
                    prestatiesNlPriveOmzet: "150",
                    prestatiesNlPriveBelasting: "200"
                }
            };
            var validationResult = aangifteSchermFormValidator.getValidationResultForAllCrossFieldValidators(aangifteSchermDetails);
            var expectedErrorMessage = "Belastingbedrag moet lager zijn dan de omzet";
            expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
        });
        it('should return invalid message when invalid C04_3', function () {
            var aangifteSchermDetails = {
                aangifteSchermDetails: {
                    prestatiesNlPriveOmzet: "-150",
                    prestatiesNlPriveBelasting: "0"
                }
            };
            var validationResult = aangifteSchermFormValidator.getValidationResultForAllCrossFieldValidators(aangifteSchermDetails);
            var expectedErrorMessage = "Belastingbedrag moet lager zijn dan EUR 0,-";
            expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
        });
        it('should return invalid message when invalid C04_4', function () {
            var aangifteSchermDetails = {
                aangifteSchermDetails: {
                    prestatiesNlPriveOmzet: "150",
                    prestatiesNlPriveBelasting: "0"
                }
            };
            var validationResult = aangifteSchermFormValidator.getValidationResultForAllCrossFieldValidators(aangifteSchermDetails);
            var expectedErrorMessage = "Belastingbedrag moet groter zijn dan EUR 0,-";
            expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
        });
        it('should return invalid message when invalid C04_5', function () {
            var aangifteSchermDetails = {
                aangifteSchermDetails: {
                    prestatiesNlPriveOmzet: "-150",
                    prestatiesNlPriveBelasting: "-151"
                }
            };
            var validationResult = aangifteSchermFormValidator.getValidationResultForAllCrossFieldValidators(aangifteSchermDetails);
            var expectedErrorMessage = "Belastingbedrag moet minder zijn dan de omzet";
            expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
        });
        it('should return invalid message when invalid C05', function () {
            var aangifteSchermDetails = {
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
            var validationResult = aangifteSchermFormValidator.getValidationResultForAllCrossFieldValidators(aangifteSchermDetails);
            var expectedErrorMessage = "Berekening van TOTAAL omzetbelasting is niet juist";
            expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
        });
        it('should return invalid message when invalid C06', function () {
            var aangifteSchermDetails = {
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
            var validationResult = aangifteSchermFormValidator.getValidationResultForAllCrossFieldValidators(aangifteSchermDetails);
            var expectedErrorMessage = "Berekening van TOTAAL te betalen/terug te ontvangen is niet juist";
            expect(validationResult.getErrorMessages()).toContain(expectedErrorMessage);
        });
        it('should return success when valid C05 en C06', function () {
            var aangifteSchermDetails = {
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
            var validationResult = aangifteSchermFormValidator.getValidationResultForAllCrossFieldValidators(aangifteSchermDetails);
            expect(validationResult.isSuccess()).toBeTruthy();
        });
    });
});
