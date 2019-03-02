import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';
import TYPES from '../types';
import { IHomeController } from './Controllers/HomeController';
import container from '../inversify.config';
import * as http from "http";
import * as SocketIO from "socket.io";

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
        this.initialize();
        this.start();  
        console.log("Constructor Server"); 
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
    }
 }

 let server = Server.bootstrap();
