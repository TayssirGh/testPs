import { Injectable } from '@angular/core';
import SockJS from "sockjs-client";
import {Stomp} from "@stomp/stompjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private stompClient : any;
  private backendUrl = "http://localhost:8080/game";

  constructor(private httpClient: HttpClient) {
    this.initConnectionSocket()
  }
// -------- connection to the game  ------------
  public initConnectionSocket(){
    console.log("connecting to the game");
    const url = this.backendUrl;
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket);
  }
  public createGame(){

  }
  public connectToGame(){

  }
  public connectToRandomGame(){
  }
  public sendMove(data: string) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const moveEndpoint = `${this.backendUrl}/2pmove`;
    return this.httpClient.post(moveEndpoint, data,{ headers, responseType: 'text' }).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('BELEHI SAYABNI', error);
      }
    );
  }



}
