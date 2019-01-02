import { inject } from "inversify";
import { controller, httpGet } from 'inversify-express-utils';
import "reflect-metadata";
import TYPES from "../../types";
import { ILocalizationService } from "../Service/LocalizationService";

export interface IHomeController {
    initialize() : void;
}

@controller('/')
export class HomeController implements IHomeController{

    constructor(@inject(TYPES.LocalizationService) private localizationService: ILocalizationService) {}
    
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
