import { HelloService } from "./hello-service.interface";

class HelloComponent {

    constructor(private helloService: HelloService) {}

    public sayHello(): string {

        return this.helloService.sayHello();
    }
}

export = HelloComponent;
