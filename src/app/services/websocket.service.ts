import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  public user: any;

  constructor(
    private socket: Socket
    ) {
      this.checkStatus();
    }

    checkStatus(){
      this.socket.on('connect', ()=> {
        console.log('Conectado al servidor');
        this.socketStatus = true;
      })

      this.socket.on('disconnect', ()=> {
        console.log('Desconectado al servidor');
        this.socketStatus = false;
      })
    }

    // Emite evento a servidor
    emit(evento: string, payload?: any, callback?: Function){

      console.log('Emitiendo', evento);
      //emit('EVENTO', payload, callback?)
      this.socket.emit(evento, payload, callback);
    }

    // Escucha evento del servidor
    listen(evento: string) {
      return this.socket.fromEvent( evento );
    }

    loginWS(username){
      console.log('Configurando', username);
      
      this.emit('configurar-usuario', {username}, resp=> {
        console.log(resp);
      })
    }
}
