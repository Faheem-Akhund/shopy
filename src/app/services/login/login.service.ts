import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../global/global.service';
const AUTH_API = GlobalConstants.apiURL


// const AUTH_API = 'http://192.168.1.102:8081/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
    return this.http.post(AUTH_API + 'customerauthenticate', { username, password }, { headers: headers });
  }
  register(userName: string, password: string, roles: string): Observable<any> {
    return this.http.post(AUTH_API + 'create', {userName,password,roles}, httpOptions);
  }


  // setIP(IP:string)
  // {
  //   localStorage.setItem('')
  // }


}
