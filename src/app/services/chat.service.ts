import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public socketService: WebsocketService
  ) { }

  sendMessage(mensaje: string){
    const payload = {
      de: 'Fernando',
      cuerpo: mensaje
    };

    this.socketService.emit('mensaje', payload);
  }

  getMessages(){
    return this.socketService.listen('mensaje-nuevo');
  }
}
