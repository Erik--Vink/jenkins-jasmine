class ValidationResult {
    private errorMessages: Array<string>;

    constructor(errorMessages: Array<string> = []) {
        this.errorMessages = errorMessages;
    }

    public isSuccess() : boolean {
        return this.errorMessages.length === 0;
    }

    public isError() : boolean {
        return this.errorMessages.length > 0;
    }

    public getErrorMessages(): Array<string>{
        return this.errorMessages;
    }

    public addErrorMessage(errorMessage: string): void {
        this.errorMessages.push(errorMessage);
    }

    public addErrorMessages(errorMessages: Array<string>): void{
        this.errorMessages = this.errorMessages.concat(errorMessages);
    }
}

export = ValidationResult;




