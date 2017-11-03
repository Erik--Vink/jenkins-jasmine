import * as nsxActions from './../../../nsx/NsxActions';
import * as nsxApplication from './../../../nsx/NsxApplication';
import * as jQuery from "jquery";

class AangifteService{
    create(model: any) {
        let postData = JSON.stringify(model);
        let aangifteElement = nsxApplication.getElement("obnieuw", "aangifte");
        let actionURL  = nsxActions.getElementUrl(aangifteElement, "saveDetails-json");

        return jQuery.ajax({
            type: 'POST',
            url: actionURL,
            data: postData,
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8'
        });
    }

}
export = AangifteService;