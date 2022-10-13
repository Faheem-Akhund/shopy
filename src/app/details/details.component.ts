import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DetailService } from '../services/details/detail.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private auth: DetailService, private router: Router) { }
  object: AuthModel[] = [];
  ngOnInit(): void {
    this.fix();
  }
  fix() {
    this.auth.getUserDetails('pending').toPromise().then(res => {
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