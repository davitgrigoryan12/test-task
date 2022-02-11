import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  forms: FormGroup | any;

  productName: FormControl | any;
  price: FormControl | any;
  email: FormControl | any;
  phoneNumber: FormControl | any;
  address: FormControl | any;
 
  constructor(
    private global:GlobalService,
    ) 
  {
  //    
  }

  ngOnInit(): void {    
    this.createFormControllers();
    this.createForm();    
  }

  createFormControllers() {
    const emailReg: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneReg: any = /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/;
    this.productName = new FormControl('', [
      Validators.required
    ]);
    this.price = new FormControl('', [
      Validators.required
    ]);
    this.phoneNumber = new FormControl('', [
      Validators.pattern(phoneReg),
      Validators.maxLength(16)
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(emailReg),
    ]);
    this.address = new FormControl('', [
      Validators.required
    ]);
  }

  createForm() {
    this.forms = new FormGroup({
      productName: this.productName,
      price: this.price,
      address: this.address,
      email: this.email,
      phoneNumber: this.phoneNumber,
    });
    if (this.forms.status === "VALID") {
      if (!this.forms.value.phoneNumber) {
        this.forms.value.phoneNumber = "There is no phone number"
      }
      this.global.createProduct(this.forms.value).subscribe()
    }
    
  }

}
