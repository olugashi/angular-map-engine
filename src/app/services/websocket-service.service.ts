import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';



@Injectable({
  providedIn: 'root'
})
export class WebsocketServiceService {

  socket: SocketIOClient.Socket;
  constructor() {
  }

   // EMITTER
   sendMessage(msg: string) {
    this.socket.emit('sendMessage', { message: msg });
  }

  /*
  // HANDLER
  onNewMessage() {
    return Observable.create(observer => {
      this.socket.on('newMessage', msg => {
        observer.next(msg);
      });
    });
  }
  */
}
