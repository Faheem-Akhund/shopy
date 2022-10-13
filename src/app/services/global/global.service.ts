import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  getDiscardedItems() {
   
    return "faheem"
  }
}


export class GlobalConstants {

  public static IP: string = 'http://'+localStorage.getItem('api')+':8081/';
  public static IP2: string = 'http://'+localStorage.getItem('api')+':8080/';
  public static socketURL: string = this.IP2 || "";
  public static apiURL: string = this.IP || "";
    
}