
/*import { injectable } from "inversify";
import "reflect-metadata";
import { controller } from "inversify-express-utils";

export interface ISocketController {
    initialize() : void;
}
    
@controller('/')
export class SocketController implements ISocketController {
    
    @OnConnect("connection")
    connection() {
        console.log("Client connected");
    }

    @OnDisconnect("disconnect")
    disconnect() {
        console.log("Client disconnected");
    }

    @OnMessage("message")
    message(@Payload() payload: any, @ConnectedSocket() socket: any) {
        console.log("Message received");
        socket.emit("message", "Hello!");
    }

    initialize(): void {
    }

}*/