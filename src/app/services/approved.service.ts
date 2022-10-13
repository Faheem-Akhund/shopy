import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from './global/global.service';

const AUTH_API = GlobalConstants.apiURL
// const AUTH_API = 'http://192.168.1.102:8081/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ApprovedService {

  constructor(private http: HttpClient) { }

  getUserDetails(api: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(AUTH_API + api, { headers: headers });
  }

  sendImage(items: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post(AUTH_API + 'purchase', items, { headers: headers });
  }

  getAllAddresses(): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(AUTH_API + 'alladdresses', { headers: headers });
  }

}
