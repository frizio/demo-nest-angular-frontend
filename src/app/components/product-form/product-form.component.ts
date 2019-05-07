import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  public product: Product = {
    name: '',
    description: '',
    imageUrl: '',
    price: 0,
    new: true
  };

  constructor() { }

  ngOnInit() {
  }

  submitProduct() {
    console.log('Submit the product');
    console.log(this.product);

  }

}
