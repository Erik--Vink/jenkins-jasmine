import FormValidator = require("./FormValidator");

interface IFormValidatorFactory{
    createFormValidator(formIdentifier: string): FormValidator;
}

export = IFormValidatorFactory;