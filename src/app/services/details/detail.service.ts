import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = 'http://192.168.10.171:8081/';
// const AUTH_API = 'http://192.168.1.102:8081/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient) { }

  getUserDetails(api: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(AUTH_API + api, { headers: headers });
  }
}
