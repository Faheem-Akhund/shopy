import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApprovedService } from '../services/approved.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.scss']
})
export class ApprovedComponent implements OnInit {

  constructor(private auth: ApprovedService, private router: Router, private modalService: NgbModal) { }
  newCategory = false;
  newAddress = false;
  uploadedImage: any;
  alladdresses: ADDRESSES[] = [];
  addressId = "";
  houseNO = "";
  town = ""
  address = "";
  object: AuthModel[] = [];
  total = "";

  ngOnInit(): void {
    this.fix();
  }
  disable() {
    this.newAddress = !this.newAddress
  }
  public onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
  }
  imageUploadAction() {
    if (this.newAddress == true) {
      this.addressId = '';
    }
    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage);
    imageFormData.append('city', this.address);
    imageFormData.append('town', this.town);
    imageFormData.append('houseNo', this.houseNO);
    imageFormData.append('addressId', this.addressId);
    imageFormData.append('address', this.address + "----" + this.town + "----" + this.houseNO);
    this.auth.sendImage(imageFormData).toPromise().then(res => {
      if (res.code == 1) {
        this.object = [];
        this.newCategory = false;
        this.total = "";
      }
    });
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
    this.auth.getAllAddresses().toPromise().then(res => {
      if (res.code == 1) {
        this.alladdresses = res.object;
      }
    });

  }
  fix() {
    this.auth.getUserDetails('cart/approved').toPromise().then(res => {
      if (res.code == 1) {
        this.newCategory = true;
        this.object = res.object.cart;
        this.total = res.object.total
      }
    });
  }

}

interface AuthModel {
  readonly id: string | number | null;
  status: string | null;
  paymentStatus: string | null;
  product: { productName: string, price: string | null | number, imgsrc: string } | null;
}
interface ADDRESSES {
  id: string;
  city: string;
  town: string;
  houseNo: string
}

