///<reference path="../../node_modules/@types/jasmine/index.d.ts"/>

import ObnummerFieldValidator = require("../knockout/ts/obnieuw/aangifte/validation/fieldValidators/ObnummerFieldValidator");

describe('ObnummerFieldValidator', () => {

    it("should say 'hello world!'", () => {

        let obnummerFieldValidator = new ObnummerFieldValidator();

        expect(obnummerFieldValidator.getFieldName()).toEqual("obnummer");
    });
});