/**
 * DataModelMapper is the interface for all modelMappers.
 * Every instance of this modelMapper is bound to a single model.
 * The responsibility of this class is to convert a model to a viewModel and vice versa.
 * This class can be used to convert a JSON dataModel to a Knockout viewModel for example.
 */
interface IDataModelMapper {
    /**
     * Returns a Knockout viewModel object conversion of the given model
     * @param model An object that contains the properties of a dataModel
     */
    dataModelToViewModel(model);

    /**
     * Returns a dataModel object conversion of the given Knockout viewModel
     * @param viewModel
     */
    viewModelToDataModel(viewModel);
}

export = IDataModelMapper;