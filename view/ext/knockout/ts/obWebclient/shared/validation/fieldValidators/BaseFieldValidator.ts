import ValidationResult = require("../ValidationResult");

/**
 * BaseFieldValidator is the abstract base class for each FieldValidator.
 * A FieldValidator object has two primary tasks which are:
 * <ul>
 *     <li>Return the validationResult based upon the given business rules
 *     <li>Optional: Mask the value of the field
 * </ul>
 * Each FieldValidator can be a subclass of another FieldValidator.
 * A FieldValidator can inherit the StringFieldValidator for example.
 */
abstract class BaseFieldValidator {

    protected fieldName: string;
    protected unmaskedValue;
    protected maskedValue;

    /**
     * Get the validationResult based upon the implemented validation rules in this method
     * @param fieldValue The inputValue of the field
     * @returns {ValidationResult} Returns a ValidationResult based upon the implemented validation rules in this method
     */
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