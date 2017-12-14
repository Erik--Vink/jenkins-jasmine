var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define(["require", "exports", "jquery", "knockout", "./../../shared/view/layout/ViewLayoutMapping", "es6-promise", "jsonix", "../service/CommandService"], function (require, exports, $, ko, viewLayoutMappingModule, ES6Promise, jsonixModule, CommandService) {
    "use strict";
    /**
     * FormModel is the abstract base class for all FormModel instances.
     * A FormModel instance object contains the information that needs to be bound to the view.
     * This information consists of the dataModel and the confirm method.
     * Each instance should implement various getters so that the correct NS element and FormValidator is bound.
     */
    var FormModel = /** @class */ (function () {
        function FormModel(elementData) {
            this.layoutViewModelVersion = "v4";
            this.commandService = new CommandService(this.getComponentName(), this.getElementName());
            this.dataViewModel = this.getDataModelMapper().dataModelToViewModel(elementData);
            this.templateName = "shared/formTemplate";
            this.addErrorHandlingToDataViewModel();
        }
        FormModel.prototype.isModelReady = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.getAsyncLayoutViewModel()];
                        case 1:
                            _a.layoutViewModel = _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        FormModel.prototype.getLayoutViewModelName = function () {
            return "viewmodel_" + this.getElementName() + "_" + this.layoutViewModelVersion;
        };
        FormModel.prototype.getLayoutViewModelXMLPath = function () {
            return "../../ts/" + this.getComponentName() + "/" + this.getElementName() + "/view/layout/" + this.getLayoutViewModelName() + ".xml";
        };
        /**
         * Executes the validation of the complete form and executes a command if the form is valid.
         * The command to execute is based upon the getConfirmCommandName method.
         * This method can be bound to the view by a submit button for example.
         */
        FormModel.prototype.confirm = function () {
            var _this = this;
            var validationResult = this.getFormValidationResult();
            if (validationResult.isSuccess()) {
                var promise = this.commandService.executeCommand(this.getConfirmCommandName(), this.getDataModelFromDataViewModel());
                promise.done(function (result) {
                    console.log(result);
                    _this.resetForm();
                });
                promise.fail(function (result) {
                    console.log(result);
                    //show error message
                });
            }
        };
        /**
         * Resets the form by removing the input values for each field.
         * The default input values of the form after resetting the form are based upon the values
         * that are defined in the coupled ModelMapper.
         */
        FormModel.prototype.resetForm = function () {
            var newFormData = this.getDataModelMapper().dataModelToViewModel({});
            for (var prop in this.dataViewModel) {
                if (this.dataViewModel.hasOwnProperty(prop) && ko.isObservable(this.dataViewModel[prop])) {
                    if (newFormData.hasOwnProperty(prop)) {
                        this.dataViewModel[prop](newFormData[prop]());
                    }
                }
            }
            this.resetFormErrors();
        };
        /**
         * Returns a dataModel object of the current dataViewModel which is converted by the DataModelMapper
         * @returns {any}
         */
        FormModel.prototype.getDataModelFromDataViewModel = function () {
            return this.getDataModelMapper().viewModelToDataModel(this.dataViewModel);
        };
        /**
         * Validates the submitted formData and returns the ValidationResult.
         * The optional errorMessages of this ValidationResult are bound to the view.
         * @returns {ValidationResult}
         */
        FormModel.prototype.getFormValidationResult = function () {
            var modelData = this.getDataModelFromDataViewModel();
            var validationResult = this.getFormValidator().getValidationResultForForm(modelData);
            this.dataViewModel.errorMessages.removeAll();
            this.dataViewModel.errorMessages(validationResult.getErrorMessages());
            this.dataViewModel.hasErrors(validationResult.isError());
            return validationResult;
        };
        /**
         * Adds errorHandling properties to each property of the dataViewModel
         * The errorHandling properties can be used to show errorMessages in the view.
         */
        FormModel.prototype.addErrorHandlingToDataViewModel = function () {
            this.dataViewModel.errorMessages = ko.observableArray();
            this.dataViewModel.hasErrors = ko.observable(false);
            $.each(this.dataViewModel, function (fieldName, value) {
                value.errorMessages = ko.observableArray();
                value.hasErrors = ko.observable(false);
            });
        };
        FormModel.prototype.resetFormErrors = function () {
            this.dataViewModel.errorMessages([]);
            this.dataViewModel.hasErrors(false);
            $.each(this.dataViewModel, function (fieldName, value) {
                value.errorMessages([]);
                value.hasErrors(false);
            });
        };
        FormModel.prototype.getAsyncLayoutViewModel = function () {
            var _this = this;
            var jsonix = jsonixModule.Jsonix;
            var viewLayoutMapping = viewLayoutMappingModule.ViewLayoutMapping;
            var context = new jsonix.Context([viewLayoutMapping]);
            var unmarshaller = context.createUnmarshaller();
            return new ES6Promise.Promise(function (resolve) {
                return unmarshaller.unmarshalURL(_this.getLayoutViewModelXMLPath(), function (unmarshalledLayoutViewModel) {
                    resolve(unmarshalledLayoutViewModel["value"]);
                }, {});
            });
        };
        return FormModel;
    }());
    return FormModel;
});
