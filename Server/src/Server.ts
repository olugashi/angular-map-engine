//import { Server } from './Server';

import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';
import './Controllers/HomeController'
import TYPES from '../types';
import { IHomeController } from './Controllers/HomeController';
import container from '../inversify.config';

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

 export class Server {
    HomeController: IHomeController | undefined;
    server: InversifyExpressServer ;

    public static bootstrap(): Server {
        return new Server();
      }
    
    constructor()
    {
        this.server = new InversifyExpressServer(container);
        this.config();
        this.start();  
        this.initialize();   
    }

    private config() {
        this.server.setConfig((app) => {
            app.use(bodyParser.urlencoded({
              extended: true
            }));
            app.use(bodyParser.json());
          });
    }
     public start() {
        let serverInstance = this.server.build();
          serverInstance.listen(3000);
          
          console.log('Server started on port 3000 :)');
     }

     private initialize() {
        this.HomeController = container.get<IHomeController>(TYPES.HomeController);
        this.HomeController.initialize();
        
        console.log('Server started on port 3000 :)');
    }
 }

 let server = Server.bootstrap();
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