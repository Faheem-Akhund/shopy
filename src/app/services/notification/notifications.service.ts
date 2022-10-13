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
export class NotificationsService {

  constructor(private http: HttpClient) { }

  userNotifications(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(AUTH_API + 'notifications', { headers: headers });
  }

  receiveNotification(id: number): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(AUTH_API + 'notifications/read/' + id, { headers: headers });
  }



}
