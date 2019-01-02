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
require("reflect-metadata");
var LocalizationMessage_1 = require("../DataModel/LocalizationMessage");
var types_1 = require("../../types");
var LocalizationService = /** @class */ (function () {
    function LocalizationService(_subscriber) {
        this.subscriber = _subscriber;
        _subscriber.on('Localization', function (data) { return console.log("" + data); });
        console.log("constructor LocalizationService.");
    }
    LocalizationService.prototype.StartTimer = function () {
        var _this = this;
        setInterval(function () {
            //console.log("setInterval LocalizationMessage.");
            _this.subscriber.emit("Localization", new LocalizationMessage_1.LocalizationMessage("source", "destination", "LocalizationMessage", 2, 2));
            console.log("send Localization Data");
        }, 100);
    };
    LocalizationService.prototype.StopTimer = function () {
    };
    LocalizationService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.default.Subscriber)),
        __metadata("design:paramtypes", [Object])
    ], LocalizationService);
    return LocalizationService;
}());
exports.LocalizationService = LocalizationService;
