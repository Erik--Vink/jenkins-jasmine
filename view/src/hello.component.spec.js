"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelloComponent = require("./hello.component");
var MockHelloService = (function () {
    function MockHelloService() {
    }
    MockHelloService.prototype.sayHello = function () {
        return "Hello world!";
    };
    return MockHelloService;
}());
describe("HelloComponent", function () {
    it("should say 'Hello world!'", function () {
        var mockHelloService = new MockHelloService();
        var helloComponent = new HelloComponent(mockHelloService);
        expect(helloComponent.sayHello()).toEqual("Hello world!");
    });
});
