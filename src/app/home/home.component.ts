import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private auth: AuthService, private router: Router) { }
  cartobject: { id: string } = {
    id: ""
  }

  cartList: { cartObject: { id: string } }[] = [];
   list=[{
    id:""
   }]

   categories:Categories[]=[]
   
   list1:CART[]=[]
   
  object: ProductsModule[] = [];

  ngOnInit(): void {
    this.getallCategories();
    this.getProductsByCategory("DRESS ")
  }



  getProductsByCategory(category:string) {

    this.auth.getallPrdocuts(category).toPromise().then(res => {
      this.object = res.object;
      
    });

  }


  getallCategories() {

    this.auth.getallCategories().toPromise().then(res => {
      this.categories = res.object;
    });

  }

  addToCart(id: string ) {


    // this.cartList=[]
    // this.cartList.push({ cartObject: { id: id } });
    this.list=[]
    this.list.push({id})
    this.list1.push({id})

    // console.log(this.list)

    this.auth.addProductsToCartService(this.list1).toPromise().then(res => {
      console.log(res)
    });

  }

}

interface ProductsModule {
  id: string  ;
  status: string | null;
  price: string | null;
  imgsrc: string | null;
  productName: string | null;


}

interface CART {
  id: string  ;
}

interface Categories{
  id: string  ;
  categoryType :string;
  
}

