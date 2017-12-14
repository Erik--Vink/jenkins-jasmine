import FormValidator = require("../../shared/validation/validators/FormValidator");
import IDataModelMapper = require("../../shared/data/IDataModelMapper");
import AangifteSchermFormValidator = require("../validation/validators/AangifteSchermFormValidator");
import AangifteSchermDataModelMapper = require("../data/AangifteSchermDataModelMapper");
import FormModel = require("../../shared/view/FormModel");

class AangifteSchermFormModel extends FormModel {
    getComponentName() {
        return "obWebclient";
    }

    getElementName() {
        return "aangifteScherm";
    }

    getFormValidator(): FormValidator {
        return new AangifteSchermFormValidator();
    }

    getDataModelMapper(): IDataModelMapper {
        return new AangifteSchermDataModelMapper();
    }

    getConfirmCommandName() {
        return "verwerkAangifteSchermCommand";
    }
}

export = AangifteSchermFormModel;