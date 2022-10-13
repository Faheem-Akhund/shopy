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
export class HomeService {

  constructor(private http: HttpClient) { }

  getallPrdocuts(category: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(AUTH_API + 'products/user/' + category, { headers: headers });
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

}
