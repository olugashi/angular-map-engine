import { injectable, inject, decorate } from "inversify";
import { EventEmitter } from "events";
import { TYPE } from "inversify-express-utils";
import TYPES from "../../types";

decorate(injectable(), EventEmitter);

export interface ISubscriber 
{
    on(event: string, listener: Function): this;
    emit(event: string, ...args: any[]): boolean;
}

@injectable()
export class Subscriber extends EventEmitter implements ISubscriber {
    
    constructor() {
        super();
    }
}