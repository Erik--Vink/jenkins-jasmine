import FormValidator = require("../validation/validators/FormValidator");
import IDataModelMapper = require("../data/IDataModelMapper");
import FormPageService = require("../service/FormPageService");

class FormPageModel{

    formService: FormPageService;
    formValidator: FormValidator;
    dataModelMapper: IDataModelMapper;
    formViewModel: any;

    constructor(detailData, dataModelMapper: IDataModelMapper, formValidator: FormValidator){
        this.formService = new FormPageService();
        this.formValidator = formValidator;
        this.dataModelMapper = dataModelMapper;
        this.formViewModel = this.dataModelMapper.dataModelToViewModel(detailData);
    }

    confirm(){
        let modelData = this.dataModelMapper.viewModelToDataModel(this.formViewModel);

        let validationResult = this.formValidator.getValidationResultForForm(modelData);

        this.formViewModel.errorMessages.removeAll();
        this.formViewModel.errorMessages(validationResult.getErrorMessages());
        this.formViewModel.hasErrors(validationResult.isError());

        if(validationResult.isSuccess()){
            let promise = this.formService.create(modelData);

            promise.done(function(result) {
                console.log(result);
                //redirect to default page?
            });

            promise.fail(function(result) {
                console.log(result);
                //show error message
            });
        }
    }
}
export = FormPageModel;