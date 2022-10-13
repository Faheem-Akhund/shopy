import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
// import * as SockJS from 'sockjs-client';
import * as SockJS from 'sockjs-client'
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalConstants } from '../services/global/global.service';
const AUTH_API = GlobalConstants.socketURL
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  listBOX: BOX[] = [];
  users: UserList[] = []
  showMessages: MessageBean[] = []
  messageOBJ = {} as MSG;
  self = localStorage.getItem('user') || "";
  chatWith = ""
  newMessage = "";
  messageBean = {
    sender: "",
    message: "",
  };
  private stompClient: any;
  constructor(private httpClient: HttpClient, private auth: AuthService, private modalService: NgbModal) { }
  ngOnInit() {
    this.connect();
    this.getAllUsersListForChat();
    this.countMessage();
  }
  getAllUsersListForChat() {
    this.auth.OpenAPIGet('users').toPromise().then(res => {
      if (res.code == 0) {
        this.users = res.object;
      }
    });
  }
  connect() {
    const socket = new SockJS(AUTH_API + 'testchat');
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, function (frame: any) {
      _this.stompClient.subscribe('/start/initial/' + localStorage.getItem('user'), function (object: Receiver) {
        let body: BODY = JSON.parse(object.body as any);
        if (_this.listBOX.some(e => e.sender == body.sender)) {
          let obj: any = _this.listBOX.find(e => e.sender == body.sender);
          const pt = new Point();
          pt.message = body.message
          pt.of = body.sender
          obj.msgList.push(pt);
        } else {
          const pt = new Point();
          pt.message = body.message
          pt.of = body.sender
          _this.listBOX.push({ sender: body.sender, msgList: [pt] });
        }
        _this.countMessage();
      });
    });
  }
  fire(receiver: string) {
    this.users.forEach(function (user) {
      if (user.userName === receiver) {
        user.noOfMessages = 0
      }
    });
    this.chatWith = receiver;
  }
  sendMessage() {
    this.messageBean.message = this.newMessage;
    this.messageBean.sender = this.self;
    this.stompClient.send('/current/resume/' + this.chatWith, {}, JSON.stringify(this.messageBean));
    this.newMessage = "";
    if (this.listBOX.some(e => e.sender == this.chatWith)) {
      let obj: any = this.listBOX.find(e => e.sender == this.chatWith);
      const pt = new Point();
      pt.message = this.messageBean.message;
      pt.of = this.self
      this.messageOBJ.message = this.messageBean.message
      this.messageOBJ.of = this.chatWith
      obj.msgList.push(pt);
    } else {
      const pt = new Point();
      pt.message = this.messageBean.message
      pt.of = this.self
      this.listBOX.push({ sender: this.chatWith, msgList: [pt] });
    }
  }
  countMessage() {
    const _this = this;
    this.listBOX.forEach(function (value) {
      _this.users.forEach(function (user) {
        if (user.userName === value.sender) {
          let counter = 0;
          value.msgList.forEach(function (msg) {
            if (msg.of !== _this.self) {
              counter++;
            }
          })
          user.noOfMessages = counter
        }
      });
    });
  }
}
export interface MessageBean {
  id: number,
  message: string
}
export interface Receiver {
  body: BODY
}
export interface BODY {
  sender: string,
  message: string
}
export interface UserList {
  id: number,
  userName: string
  noOfMessages: number
}
export interface MSG {
  message: string
  of: string
}
export interface BOX {
  sender: string;
  msgList: Array<Point>
}
class Point {
  message = "";
  of = "";
}

