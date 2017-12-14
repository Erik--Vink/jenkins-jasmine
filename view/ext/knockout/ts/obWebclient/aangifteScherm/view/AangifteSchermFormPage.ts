import FormPage = require("../../shared/view/FormPage");
import MenuModel = require("../../shared/view/MenuModel");
import FormModel = require("../../shared/view/FormModel");
import AangifteSchermFormModel = require("./AangifteSchermFormModel");

class AangifteSchermFormPage extends FormPage {

    public getMenuModel(): MenuModel {
        return new MenuModel("OB Lokaal");
    };

    public getFormModel(): FormModel {
        return new AangifteSchermFormModel({});
    }
}

export = AangifteSchermFormPage;