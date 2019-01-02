"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// load everything needed to the Container
var inversify_1 = require("inversify");
var LocalizationService_1 = require("./src/Service/LocalizationService");
var types_1 = require("./types");
var HomeController_1 = require("./src/Controllers/HomeController");
var Subscriber_1 = require("./src/Service/Subscriber");
var container = new inversify_1.Container();
container.bind(types_1.default.LocalizationService).to(LocalizationService_1.LocalizationService);
container.bind(types_1.default.HomeController).to(HomeController_1.HomeController);
container.bind(types_1.default.Subscriber).to(Subscriber_1.Subscriber);
exports.default = container;
