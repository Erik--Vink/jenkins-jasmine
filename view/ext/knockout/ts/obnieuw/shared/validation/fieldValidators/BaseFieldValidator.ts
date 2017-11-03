import ValidationResult = require("../ValidationResult");

abstract class BaseFieldValidator{

    protected fieldName: string;
    protected unmaskedValue;
    protected maskedValue;

    abstract getValidationResult(fieldValue: any): ValidationResult;

    public mask(unmaskedValue: any): any {
        this.maskedValue = unmaskedValue;
        return this.maskedValue;
    }

    public unmask(maskedValue: any): any {
        this.unmaskedValue = maskedValue;
        return this.unmaskedValue;
    }

    public getFieldName() {
        return this.fieldName;
    }

    public setFieldName(fieldName) {
        this.fieldName = fieldName;
    }

    public getUnmaskedValue() {
        return this.unmaskedValue;
    }

    public getMaskedValue() {
        return this.maskedValue;
    }
}
export = BaseFieldValidator;