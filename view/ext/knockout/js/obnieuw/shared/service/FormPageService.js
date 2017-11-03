define(["require", "exports", "./../../../nsx/NsxActions", "./../../../nsx/NsxApplication", "jquery"], function (require, exports, nsxActions, nsxApplication, jQuery) {
    "use strict";
    var FormPageService = (function () {
        function FormPageService() {
        }
        FormPageService.prototype.create = function (model) {
            var postData = JSON.stringify(model);
            var aangifteElement = nsxApplication.getElement("obnieuw", "aangifte");
            var actionURL = nsxActions.getElementUrl(aangifteElement, "saveDetails-json");
            return jQuery.ajax({
                type: 'POST',
                url: actionURL,
                data: postData,
                dataType: 'json',
                contentType: 'application/json; charset=UTF-8'
            });
        };
        return FormPageService;
    }());
    return FormPageService;
});
