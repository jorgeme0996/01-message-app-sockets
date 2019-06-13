import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';

  constructor(public socketService: WebsocketService) { }

  ngOnInit() {
  }

  ingresar(){
    this.socketService.loginWS(this.username);
  }
}
