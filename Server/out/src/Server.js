"use strict";
//import { Server } from './Server';
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_express_utils_1 = require("inversify-express-utils");
var bodyParser = require("body-parser");
require("./Controllers/HomeController");
var types_1 = require("../types");
var inversify_config_1 = require("../inversify.config");
//import TYPES from '../types';
// start the server
/*let server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

let serverInstance = server.build();
serverInstance.listen(3000);

console.log('Server started on port 3000 :)');

var Controller = container.get<IHomeController>(TYPES.HomeController);
Controller.initialize();*/
var Server = /** @class */ (function () {
    function Server() {
        this.server = new inversify_express_utils_1.InversifyExpressServer(inversify_config_1.default);
        this.config();
        this.start();
        this.initialize();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.config = function () {
        this.server.setConfig(function (app) {
            app.use(bodyParser.urlencoded({
                extended: true
            }));
            app.use(bodyParser.json());
        });
    };
    Server.prototype.start = function () {
        var serverInstance = this.server.build();
        serverInstance.listen(3000);
        console.log('Server started on port 3000 :)');
    };
    Server.prototype.initialize = function () {
        this.HomeController = inversify_config_1.default.get(types_1.default.HomeController);
        this.HomeController.initialize();
        console.log('Server started on port 3000 :)');
    };
    return Server;
}());
exports.Server = Server;
var server = Server.bootstrap();
// create server
/*export class Server {

    public app: express.Application;

    public static bootstrap(): Server {
        return  new InversifyExpressServer(container);
      }
    constructor()
    {
        this.app = express();
        this.config();
        this.start();
    }

    private config()
    {
        this.app.use(express.json())
        //this.app.get('/', (req, res) => {res.send({hello: 'world'});});
    }
    private start() {
        this.app.listen(4201, '127.0.0.1', function() {
            console.log("Server now listening on 4201")});
    }
}*/
//console.log("Run Server")
// start the server
//var server = Server.bootstrap();
//var Controller = container.get<IController>(TYPES.Controller);
//Controller.initialize();
//var c = new Controller(new LocalizationService());
//import { LocalizationService } from './Service/LocalizationService';
//import { LocalizationMessage } from "./DataModel/LocalizationMessage";
//var localization = new LocalizationMessage("","","",1.0,2.0);
//var localizationService = new LocalizationService();
//localizationService.StartTimer();
