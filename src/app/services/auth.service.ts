import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';

const AUTH_API = 'http://192.168.10.171:8081/';
// const AUTH_API = 'http://192.168.1.102:8081/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
    return this.http.post(AUTH_API + 'customerauthenticate', { username, password }, { headers: headers });
  }

  getUserDetails(api: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(AUTH_API + api, { headers: headers });
  }

  getallPrdocuts(category: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(AUTH_API + 'products/user/' + category, { headers: headers });
  }

  sendImage(items: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post(AUTH_API + 'purchase', items, { headers: headers });
  }

  getallCategories(): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(AUTH_API + 'allcategories', { headers: headers });
  }

  addProductsToCartService(cartList: Object,): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post(AUTH_API + 'cart',cartList,{ headers: headers });
  }
  register(userName: string, password: string, roles: string): Observable<any> {
    return this.http.post(AUTH_API + 'create', {userName,password,roles}, httpOptions);
  }
  
  allOrders(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(AUTH_API + 'allorders', { headers: headers });
  }

  getAllAddresses(): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(AUTH_API + 'alladdresses', { headers: headers });
  }

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

  getAllConversations(url: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(AUTH_API + url, { headers: headers });
  }

  createConversation(id: number): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(AUTH_API + 'conversation/' + id, { headers: headers });
  }

}
