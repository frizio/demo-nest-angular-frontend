import { Product } from './../../interfaces/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      res => {
        console.log('OK');
        this.products = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
