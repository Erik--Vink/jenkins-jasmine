define(["require", "exports"], function (require, exports) {
    "use strict";
    var HelloComponent = (function () {
        function HelloComponent() {
        }
        HelloComponent.prototype.sayHello = function () {
            return "test";
        };
        return HelloComponent;
    }());
    return HelloComponent;
});
