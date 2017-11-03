import FormPageModel = require("./FormPageModel");
import FormValidator = require("../validation/validators/FormValidator");
import IDataModelMapper = require("../data/IDataModelMapper");

abstract class FormPage{

    abstract pageModel: FormPageModel;
    abstract formValidator: FormValidator;
    abstract dataModelMapper: IDataModelMapper;

    public abstract applyModel(viewIdentifier: string);

    protected abstract assignPageModel(templateName: string, detailData: any);
}
export = FormPage;