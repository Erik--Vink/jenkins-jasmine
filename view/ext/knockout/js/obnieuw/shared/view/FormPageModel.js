define(["require", "exports", "../service/FormPageService"], function (require, exports, FormPageService) {
    "use strict";
    var FormPageModel = (function () {
        function FormPageModel(detailData, dataModelMapper, formValidator) {
            this.formService = new FormPageService();
            this.formValidator = formValidator;
            this.dataModelMapper = dataModelMapper;
            this.formViewModel = this.dataModelMapper.dataModelToViewModel(detailData);
        }
        FormPageModel.prototype.confirm = function () {
            var modelData = this.dataModelMapper.viewModelToDataModel(this.formViewModel);
            var validationResult = this.formValidator.getValidationResultForForm(modelData);
            this.formViewModel.errorMessages.removeAll();
            this.formViewModel.errorMessages(validationResult.getErrorMessages());
            this.formViewModel.hasErrors(validationResult.isError());
            if (validationResult.isSuccess()) {
                var promise = this.formService.create(modelData);
                promise.done(function (result) {
                    console.log(result);
                    //redirect to default page?
                });
                promise.fail(function (result) {
                    console.log(result);
                    //show error message
                });
            }
        };
        return FormPageModel;
    }());
    return FormPageModel;
});
