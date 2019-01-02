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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
require("reflect-metadata");
var BaseMessage = /** @class */ (function () {
    function BaseMessage(_Source, _Destination, _MessageTyp) {
        this._Source = _Source;
        this._Destination = _Destination;
        this._MessageTyp = _MessageTyp;
    }
    Object.defineProperty(BaseMessage.prototype, "MessageTyp", {
        get: function () {
            return this._MessageTyp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseMessage.prototype, "Destination", {
        get: function () {
            return this._Destination;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseMessage.prototype, "Source", {
        get: function () {
            return this._Source;
        },
        enumerable: true,
        configurable: true
    });
    BaseMessage = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [String, String, String])
    ], BaseMessage);
    return BaseMessage;
}());
exports.BaseMessage = BaseMessage;
