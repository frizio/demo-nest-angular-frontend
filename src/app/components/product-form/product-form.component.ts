import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
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

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitProduct() {
    console.log('Submit the product');
    console.log(this.product);
    this.productService.createProduct(this.product).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
