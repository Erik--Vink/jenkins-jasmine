import * as $ from "jquery";
import * as ko from "knockout";
import * as viewLayoutMappingModule from './../../shared/view/layout/ViewLayoutMapping';
import ES6Promise = require("es6-promise");
import jsonixModule = require("jsonix");
import FormValidator = require("../validation/validators/FormValidator");
import IDataModelMapper = require("../data/IDataModelMapper");
import CommandService = require("../service/CommandService");
import ValidationResult = require("../validation/ValidationResult");

/**
 * FormModel is the abstract base class for all FormModel instances.
 * A FormModel instance object contains the information that needs to be bound to the view.
 * This information consists of the dataModel and the confirm method.
 * Each instance should implement various getters so that the correct NS element and FormValidator is bound.
 */
abstract class FormModel {
    private commandService: CommandService;
    protected dataViewModel: any;
    protected layoutViewModel: any;
    protected templateName: string;
    private layoutViewModelVersion: string;

    constructor(elementData) {
        this.layoutViewModelVersion = "v4";
        this.commandService = new CommandService(this.getComponentName(), this.getElementName());
        this.dataViewModel = this.getDataModelMapper().dataModelToViewModel(elementData);
        this.templateName = "shared/formTemplate";

        this.addErrorHandlingToDataViewModel();
    }

    async isModelReady() {
        this.layoutViewModel = await this.getAsyncLayoutViewModel();
        return;
    }

    abstract getComponentName();

    abstract getElementName();

    abstract getFormValidator(): FormValidator;

    abstract getDataModelMapper(): IDataModelMapper;

    abstract getConfirmCommandName(): string;

    protected getLayoutViewModelName(): string {
        return "viewmodel_" + this.getElementName() + "_" + this.layoutViewModelVersion;
    }

    private getLayoutViewModelXMLPath(): string {
        return "../../ts/" + this.getComponentName() + "/" + this.getElementName() + "/view/layout/" + this.getLayoutViewModelName() + ".xml"
    }

    /**
     * Executes the validation of the complete form and executes a command if the form is valid.
     * The command to execute is based upon the getConfirmCommandName method.
     * This method can be bound to the view by a submit button for example.
     */
    protected confirm() {
        let validationResult = this.getFormValidationResult();

        if (validationResult.isSuccess()) {
            let promise = this.commandService.executeCommand(this.getConfirmCommandName(), this.getDataModelFromDataViewModel());

            promise.done((result) => {
                console.log(result);
                this.resetForm();
            });

            promise.fail((result) => {
                console.log(result);
                //show error message
            });
        }
    }

    /**
     * Resets the form by removing the input values for each field.
     * The default input values of the form after resetting the form are based upon the values
     * that are defined in the coupled ModelMapper.
     */
    protected resetForm() {
        let newFormData = this.getDataModelMapper().dataModelToViewModel({});

        for (let prop in this.dataViewModel) {
            if (this.dataViewModel.hasOwnProperty(prop) && ko.isObservable(this.dataViewModel[prop])) {
                if (newFormData.hasOwnProperty(prop)) {
                    this.dataViewModel[prop](newFormData[prop]());
                }
            }
        }

        this.resetFormErrors();
    }

    /**
     * Returns a dataModel object of the current dataViewModel which is converted by the DataModelMapper
     * @returns {any}
     */
    private getDataModelFromDataViewModel() {
        return this.getDataModelMapper().viewModelToDataModel(this.dataViewModel);
    }

    /**
     * Validates the submitted formData and returns the ValidationResult.
     * The optional errorMessages of this ValidationResult are bound to the view.
     * @returns {ValidationResult}
     */
    private getFormValidationResult(): ValidationResult {
        let modelData = this.getDataModelFromDataViewModel();
        let validationResult = this.getFormValidator().getValidationResultForForm(modelData);

        this.dataViewModel.errorMessages.removeAll();
        this.dataViewModel.errorMessages(validationResult.getErrorMessages());
        this.dataViewModel.hasErrors(validationResult.isError());

        return validationResult;
    }

    /**
     * Adds errorHandling properties to each property of the dataViewModel
     * The errorHandling properties can be used to show errorMessages in the view.
     */
    private addErrorHandlingToDataViewModel() {
        this.dataViewModel.errorMessages = ko.observableArray();
        this.dataViewModel.hasErrors = ko.observable(false);

        $.each(this.dataViewModel, function (fieldName, value) {
            value.errorMessages = ko.observableArray();
            value.hasErrors = ko.observable(false);
        });
    }

    private resetFormErrors() {
        this.dataViewModel.errorMessages([]);
        this.dataViewModel.hasErrors(false);

        $.each(this.dataViewModel, function (fieldName, value) {
            value.errorMessages([]);
            value.hasErrors(false);
        });
    }

    private getAsyncLayoutViewModel() {
        let jsonix = jsonixModule.Jsonix;
        let viewLayoutMapping = viewLayoutMappingModule.ViewLayoutMapping;
        let context = new jsonix.Context([viewLayoutMapping]);
        let unmarshaller = context.createUnmarshaller();

        return new ES6Promise.Promise((resolve) => {
            return unmarshaller.unmarshalURL(this.getLayoutViewModelXMLPath(), unmarshalledLayoutViewModel => {
                resolve(unmarshalledLayoutViewModel["value"]);
            }, {});
        });
    }
}

export = FormModel;