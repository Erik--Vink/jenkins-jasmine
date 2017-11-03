interface IDataModelMapper{
    dataModelToViewModel(model):object;
    viewModelToDataModel(viewModel): object;
}
export = IDataModelMapper;