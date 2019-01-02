import { inject } from "inversify";
import { controller, httpGet } from 'inversify-express-utils';
import "reflect-metadata";
import TYPES from "../../types";
import { ILocalizationService } from "../Service/LocalizationService";
import { ISubscriber } from "../Service/Subscriber";


export interface IHomeController {
    initialize() : void;
}
    
@controller('/')
export class HomeController implements IHomeController {

    constructor(@inject(TYPES.LocalizationService) private localizationService: ILocalizationService,
    @inject(TYPES.Subscriber) _subscriber: ISubscriber) {
        _subscriber.on('Localization', (data: any)=>
                                        console.log(
                                            `Source = ${data.Source} ` + 
                                            `Destination = ${data.Destination} `));
    }
    
    initialize() {
        console.log("HomeController is initialize")
       this.localizationService.StartTimer();
        
    }
    @httpGet('/')
    public get(): string {
      return 'Home sweet home';
    }
}
/*export class Controller  {
    //constructor(@inject(TYPES.LocalizationService) localizationService: ILocalizationService) {
    //    localizationService.StartTimer();
    }
}*/
