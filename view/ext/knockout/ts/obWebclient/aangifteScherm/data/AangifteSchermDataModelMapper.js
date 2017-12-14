define(["require", "exports", "knockout", "uuid", "moment", "../validation/fieldValidators/PrestatiesNaarBtlInstallatieEuOmzetFieldValidator", "../validation/fieldValidators/PrestatiesNlNietOf0BelastOmzetFieldValidator", "../validation/fieldValidators/PrestatiesNlOverigBelastingFieldValidator", "../validation/fieldValidators/PrestatiesNlOverigOmzetFieldValidator", "../validation/fieldValidators/PrestatiesNlPriveBelastingFieldValidator", "../validation/fieldValidators/PrestatiesNlPriveOmzetFieldValidator", "../validation/fieldValidators/PrestatiesNlStandaardBelastingFieldValidator", "../validation/fieldValidators/PrestatiesNlStandaardOmzetFieldValidator", "../validation/fieldValidators/PrestatiesNlVerlaagdBelastingFieldValidator", "../validation/fieldValidators/PrestatiesNlVerlaagdOmzetFieldValidator", "../validation/fieldValidators/PrestatiesUitBtlEuBelastingFieldValidator", "../validation/fieldValidators/PrestatiesUitBtlEuOmzetFieldValidator", "../validation/fieldValidators/PrestatiesUitBtlNietEuBelastingFieldValidator", "../validation/fieldValidators/PrestatiesUitBtlNietEuOmzetFieldValidator", "../validation/fieldValidators/TotaalTeBetalenTerugTeVragenFieldValidator", "../validation/fieldValidators/VerleggingNlNaarUBelastingFieldValidator", "../validation/fieldValidators/VerleggingNlNaarUOmzetFieldValidator", "../validation/fieldValidators/VerminderingKorFieldValidator", "../validation/fieldValidators/VerschuldigdeOmzetbelastingFieldValidator", "../validation/fieldValidators/VoorbelastingFieldValidator", "../validation/fieldValidators/ObNummerFieldValidator", "../validation/fieldValidators/BezorgindicatieFieldValidator", "../validation/fieldValidators/DatumBinnenkomstFieldValidator", "../validation/fieldValidators/DagnummerFieldValidator", "../validation/fieldValidators/VolgnummerFieldValidator", "../validation/fieldValidators/PrestatiesNaarBtlNietEuOmzetFieldValidator", "../validation/fieldValidators/PrestatiesNaarBtlEuOmzetFieldValidator"], function (require, exports, ko, uuidv4, moment, PrestatiesNaarBtlInstallatieEuOmzetFieldValidator, PrestatiesNlNietOf0BelastOmzetFieldValidator, PrestatiesNlOverigBelastingFieldValidator, PrestatiesNlOverigOmzetFieldValidator, PrestatiesNlPriveBelastingFieldValidator, PrestatiesNlPriveOmzetFieldValidator, PrestatiesNlStandaardBelastingFieldValidator, PrestatiesNlStandaardOmzetFieldValidator, PrestatiesNlVerlaagdBelastingFieldValidator, PrestatiesNlVerlaagdOmzetFieldValidator, PrestatiesUitBtlEuBelastingFieldValidator, PrestatiesUitBtlEuOmzetFieldValidator, PrestatiesUitBtlNietEuBelastingFieldValidator, PrestatiesUitBtlNietEuOmzetFieldValidator, TotaalTeBetalenTerugTeVragenFieldValidator, VerleggingNlNaarUBelastingFieldValidator, VerleggingNlNaarUOmzetFieldValidator, VerminderingKorFieldValidator, VerschuldigdeOmzetbelastingFieldValidator, VoorbelastingFieldValidator, ObNummerFieldValidator, BezorgindicatieFieldValidator, DatumBinnenkomstFieldValidator, DagnummerFieldValidator, VolgnummerFieldValidator, PrestatiesNaarBtlNietEuOmzetFieldValidator, PrestatiesNaarBtlEuOmzetFieldValidator) {
    "use strict";
    var AangifteSchermDataModelMapper = /** @class */ (function () {
        function AangifteSchermDataModelMapper() {
        }
        AangifteSchermDataModelMapper.prototype.dataModelToViewModel = function (model) {
            model.messageId = uuidv4();
            var viewModel = {
                messageId: ko.observable(model.messageId),
                obNummer: ko.observable(model.obNummer).extend({ fieldValidator: new ObNummerFieldValidator() }),
                bezorgIndicatie: ko.observable(model.bezorgIndicatie).extend({ fieldValidator: new BezorgindicatieFieldValidator() }),
                datumBinnenkomst: ko.observable(model.datumBinnenkomst).extend({ fieldValidator: new DatumBinnenkomstFieldValidator() }),
                dagnummer: ko.observable(model.dagnummer).extend({ fieldValidator: new DagnummerFieldValidator() }),
                volgnummer: ko.observable(model.volgnummer).extend({ fieldValidator: new VolgnummerFieldValidator() }),
                prestatiesNaarBtlEuOmzet: ko.observable(model.prestatiesNaarBtlEuOmzet).extend({ fieldValidator: new PrestatiesNaarBtlEuOmzetFieldValidator() }),
                prestatiesNaarBtlNietEuOmzet: ko.observable(model.prestatiesNaarBtlNietEuOmzet).extend({ fieldValidator: new PrestatiesNaarBtlNietEuOmzetFieldValidator() }),
                prestatiesNaarBtlInstallatieEuOmzet: ko.observable(model.prestatiesNaarBtlInstallatieEuOmzet).extend({ fieldValidator: new PrestatiesNaarBtlInstallatieEuOmzetFieldValidator() }),
                prestatiesNlNietOf0BelastOmzet: ko.observable(model.prestatiesNlNietOf0BelastOmzet).extend({ fieldValidator: new PrestatiesNlNietOf0BelastOmzetFieldValidator() }),
                prestatiesNlOverigBelasting: ko.observable(model.prestatiesNlOverigBelasting).extend({ fieldValidator: new PrestatiesNlOverigBelastingFieldValidator() }),
                prestatiesNlOverigOmzet: ko.observable(model.prestatiesNlOverigOmzet).extend({ fieldValidator: new PrestatiesNlOverigOmzetFieldValidator() }),
                prestatiesNlPriveBelasting: ko.observable(model.prestatiesNlPriveBelasting).extend({ fieldValidator: new PrestatiesNlPriveBelastingFieldValidator() }),
                prestatiesNlPriveOmzet: ko.observable(model.prestatiesNlPriveOmzet).extend({ fieldValidator: new PrestatiesNlPriveOmzetFieldValidator() }),
                prestatiesNlStandaardBelasting: ko.observable(model.prestatiesNlStandaardBelasting).extend({ fieldValidator: new PrestatiesNlStandaardBelastingFieldValidator() }),
                prestatiesNlStandaardOmzet: ko.observable(model.prestatiesNlStandaardOmzet).extend({ fieldValidator: new PrestatiesNlStandaardOmzetFieldValidator() }),
                prestatiesNlVerlaagdBelasting: ko.observable(model.prestatiesNlVerlaagdBelasting).extend({ fieldValidator: new PrestatiesNlVerlaagdBelastingFieldValidator() }),
                prestatiesNlVerlaagdOmzet: ko.observable(model.prestatiesNlVerlaagdOmzet).extend({ fieldValidator: new PrestatiesNlVerlaagdOmzetFieldValidator() }),
                prestatiesUitBtlEuBelasting: ko.observable(model.prestatiesUitBtlEuBelasting).extend({ fieldValidator: new PrestatiesUitBtlEuBelastingFieldValidator() }),
                prestatiesUitBtlEuOmzet: ko.observable(model.prestatiesUitBtlEuOmzet).extend({ fieldValidator: new PrestatiesUitBtlEuOmzetFieldValidator() }),
                prestatiesUitBtlNietEuBelasting: ko.observable(model.prestatiesUitBtlNietEuBelasting).extend({ fieldValidator: new PrestatiesUitBtlNietEuBelastingFieldValidator() }),
                prestatiesUitBtlNietEuOmzet: ko.observable(model.prestatiesUitBtlNietEuOmzet).extend({ fieldValidator: new PrestatiesUitBtlNietEuOmzetFieldValidator() }),
                totaalTeBetalenTerugTeVragen: ko.observable(model.totaalTeBetalenTerugTeVragen).extend({ fieldValidator: new TotaalTeBetalenTerugTeVragenFieldValidator() }),
                verleggingNlNaarUBelasting: ko.observable(model.verleggingNlNaarUBelasting).extend({ fieldValidator: new VerleggingNlNaarUBelastingFieldValidator() }),
                verleggingNlNaarUOmzet: ko.observable(model.verleggingNlNaarUOmzet).extend({ fieldValidator: new VerleggingNlNaarUOmzetFieldValidator() }),
                verminderingKor: ko.observable(model.verminderingKor).extend({ fieldValidator: new VerminderingKorFieldValidator() }),
                verschuldigdeOmzetbelasting: ko.observable(model.verschuldigdeOmzetbelasting).extend({ fieldValidator: new VerschuldigdeOmzetbelastingFieldValidator() }),
                voorbelasting: ko.observable(model.voorbelasting).extend({ fieldValidator: new VoorbelastingFieldValidator() }),
            };
            return viewModel;
        };
        AangifteSchermDataModelMapper.prototype.viewModelToDataModel = function (viewModel) {
            return {
                aangifteSchermDetails: {
                    aanmaakMoment: { value: moment().format() },
                    messageId: viewModel.messageId(),
                    obNummer: new ObNummerFieldValidator().unmask(viewModel.obNummer()),
                    datumBinnenkomst: viewModel.datumBinnenkomst(),
                    dagnummer: viewModel.dagnummer(),
                    volgnummer: viewModel.volgnummer(),
                    prestatiesNaarBtlEuOmzet: viewModel.prestatiesNaarBtlEuOmzet(),
                    prestatiesNaarBtlNietEuOmzet: viewModel.prestatiesNaarBtlNietEuOmzet(),
                    prestatiesNaarBtlInstallatieEuOmzet: viewModel.prestatiesNaarBtlInstallatieEuOmzet(),
                    prestatiesNlNietOf0BelastOmzet: viewModel.prestatiesNlNietOf0BelastOmzet(),
                    prestatiesNlOverigBelasting: viewModel.prestatiesNlOverigBelasting(),
                    prestatiesNlOverigOmzet: viewModel.prestatiesNlOverigOmzet(),
                    prestatiesNlPriveBelasting: viewModel.prestatiesNlPriveBelasting(),
                    prestatiesNlPriveOmzet: viewModel.prestatiesNlPriveOmzet(),
                    prestatiesNlStandaardBelasting: viewModel.prestatiesNlStandaardBelasting(),
                    prestatiesNlStandaardOmzet: viewModel.prestatiesNlStandaardOmzet(),
                    prestatiesNlVerlaagdBelasting: viewModel.prestatiesNlVerlaagdBelasting(),
                    prestatiesNlVerlaagdOmzet: viewModel.prestatiesNlVerlaagdOmzet(),
                    prestatiesUitBtlEuBelasting: viewModel.prestatiesUitBtlEuBelasting(),
                    prestatiesUitBtlEuOmzet: viewModel.prestatiesUitBtlEuOmzet(),
                    prestatiesUitBtlNietEuBelasting: viewModel.prestatiesUitBtlNietEuBelasting(),
                    prestatiesUitBtlNietEuOmzet: viewModel.prestatiesUitBtlNietEuOmzet(),
                    totaalTeBetalenTerugTeVragen: viewModel.totaalTeBetalenTerugTeVragen(),
                    verleggingNlNaarUBelasting: viewModel.verleggingNlNaarUBelasting(),
                    verleggingNlNaarUOmzet: viewModel.verleggingNlNaarUOmzet(),
                    verminderingKor: viewModel.verminderingKor(),
                    verschuldigdeOmzetbelasting: viewModel.verschuldigdeOmzetbelasting(),
                    voorbelasting: viewModel.voorbelasting(),
                }
            };
        };
        return AangifteSchermDataModelMapper;
    }());
    return AangifteSchermDataModelMapper;
});
