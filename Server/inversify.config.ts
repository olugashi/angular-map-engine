/*import { IController , Controller } from './src/Controllers/HomeController';
import { Container } from "inversify";
import TYPES from "./types";
import { ILocalization, LocalizationMessage } from "./src/DataModel/LocalizationMessage";
import { ILocalizationService, LocalizationService } from "./src/Service/LocalizationService";

var container = new Container();
container.bind<ILocalization>(TYPES.Localization).to(LocalizationMessage);
container.bind<ILocalizationService>(TYPES.LocalizationService).to(LocalizationService);
container.bind<IController>(TYPES.Controller).to(Controller);

export default container;*/

 // load everything needed to the Container

import { Container } from "inversify";
import { LocalizationService } from "./src/Service/LocalizationService";
import TYPES from "./types";
import { IHomeController, HomeController } from "./src/Controllers/HomeController";
import { ISubscriber, Subscriber } from "./src/Service/Subscriber";


 var container = new Container();
 container.bind<LocalizationService>(TYPES.LocalizationService).to(LocalizationService);
 container.bind<IHomeController>(TYPES.HomeController).to(HomeController);
 container.bind<ISubscriber>(TYPES.Subscriber).to(Subscriber);
 export default container