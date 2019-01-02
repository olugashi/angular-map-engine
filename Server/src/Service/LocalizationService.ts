import { injectable, inject } from "inversify";
import "reflect-metadata";
import { LocalizationMessage } from "../DataModel/LocalizationMessage";
import TYPES from "../../types";
import { EventEmitter } from "events";
import { ISubscriber } from "./Subscriber";


export interface ILocalizationService{
    StartTimer() : void;
    StopTimer()  : void;
}

@injectable()
export class LocalizationService implements ILocalizationService
{
    subscriber: ISubscriber;

    constructor(@inject(TYPES.Subscriber) _subscriber: ISubscriber)
    {
        this.subscriber = _subscriber
       
        console.log("constructor LocalizationService.");
    }

    StartTimer()
    {
        setInterval(()=> 
        {  
            //console.log("setInterval LocalizationMessage.");
           this.subscriber.emit("Localization",
                                new LocalizationMessage(
                                    "source",
                                    "destination",
                                    "LocalizationMessage",2,2));   
           //console.log("send Localization Data");
        }, 100);
    }
    StopTimer()
    {

    }
   
}