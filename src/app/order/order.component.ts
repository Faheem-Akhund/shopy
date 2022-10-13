import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';
import { OrderService } from '../services/orders/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private httpClient: HttpClient,private auth: OrderService,private modalService: NgbModal) { }
  ibftrequests:IBFT[]=[]
  ngOnInit(): void {
    this.viewImage()
  }

  viewImage() {
    this.auth.allOrders().toPromise().then(res => {
      this.ibftrequests = res.object;
    });
  
  
  }

  
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-titles' })
}



}





interface IBFT{
  id: number  ;
  orderId: number  ;
  orderStatus :string;
  userName:string;
  cartList:CART[];
 
  
}

interface CART{
  product:PRODUCT
  
}

interface PRODUCT
{
  productName:string
  price:string
  imgsrc:string
}
