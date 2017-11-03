define(["require", "exports"], function (require, exports) {
    "use strict";
    var HelloComponent = (function () {
        function HelloComponent(helloService) {
            this.helloService = helloService;
        }
        HelloComponent.prototype.sayHello = function () {
            return this.helloService.sayHello();
        };
        return HelloComponent;
    }());
    return HelloComponent;
});