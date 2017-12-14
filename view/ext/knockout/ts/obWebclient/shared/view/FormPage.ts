import * as $ from "jquery";
import * as ko from "knockout";
import MenuModel = require("./MenuModel");
import FormModel = require("./FormModel");

/**
 * FormPage is the abstract class for all page instances.
 * Every instance consists of a menu and a form part and therefor needs to implement both parts.
 * Each FormPage can be bound to a view.
 */
abstract class FormPage {

    private applyMenuPart() {
        let menuSpan = $("#menu-bar");
        if (menuSpan.length > 0) {
            ko.applyBindings(this.getMenuModel(), menuSpan[0]);
        }
    }

    private async applyFormPart() {
        let formModel = this.getFormModel();
        await formModel.isModelReady().then(() => {
            ko.applyBindings(formModel, $("#form")[0]);
        })
    }

    public applyModel() {
        this.applyMenuPart();
        this.applyFormPart();
    }

    public abstract getMenuModel(): MenuModel;

    public abstract getFormModel(): FormModel;
}

export = FormPage;