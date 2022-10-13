import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DiscardedService } from '../services/discarded/discarded.service';

@Component({
  selector: 'app-discarded',
  templateUrl: './discarded.component.html',
  styleUrls: ['./discarded.component.scss']
})
export class DiscardedComponent implements OnInit {

  constructor(private auth: DiscardedService, private router: Router) { }

  object: AuthModel[] = [];
  ngOnInit(): void {
    this.getDiscardedItems();
  }
  getDiscardedItems() {
    this.auth.getDiscardedItems().toPromise().then(res => {
      if (res.code == 1) {
        this.object = res.object;
      }
    });
  }
}
interface AuthModel {
  readonly id: string | number | null;
  status: string | null;
  price: string | null | number;
  product: { productName: string, imgsrc: string } | null;
}
