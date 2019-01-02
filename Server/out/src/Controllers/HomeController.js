"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var inversify_express_utils_1 = require("inversify-express-utils");
require("reflect-metadata");
var types_1 = require("../../types");
var HomeController = /** @class */ (function () {
    function HomeController(localizationService) {
        this.localizationService = localizationService;
    }
    HomeController.prototype.initialize = function () {
        console.log("HomeController is initialize");
        this.localizationService.StartTimer();
    };
    HomeController.prototype.get = function () {
        return 'Home sweet home';
    };
    __decorate([
        inversify_express_utils_1.httpGet('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], HomeController.prototype, "get", null);
    HomeController = __decorate([
        inversify_express_utils_1.controller('/'),
        __param(0, inversify_1.inject(types_1.default.LocalizationService)),
        __metadata("design:paramtypes", [Object])
    ], HomeController);
    return HomeController;
}());
exports.HomeController = HomeController;
/*export class Controller  {
    //constructor(@inject(TYPES.LocalizationService) localizationService: ILocalizationService) {
    //    localizationService.StartTimer();
    }
}*/
