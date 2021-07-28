export class Injector {

    private static container = new Map<string, Object>();

    constructor() {

    }

    static add<T>(identifier: string, classInstance: T) {
        if(!this.container.has(identifier)){
            this.container.set(identifier, classInstance);
        }
        else {
            console.error(`An instance of ${identifier} has already been provided`)
        }
    }

    static get<T>(identifier: string): T {
        if(this.container.has(identifier)){
            return this.container.get(identifier) as T;  
        }
        else {
            console.error(`An instance of ${identifier} has not been provided`)
            return null;
        }
    }

}