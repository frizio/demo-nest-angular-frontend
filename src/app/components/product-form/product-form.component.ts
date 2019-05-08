import { Router, ActivatedRoute } from '@angular/router';
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

  public edit: boolean;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.edit = false;
    const params =  this.activatedRoute.snapshot.params;
    if (params.id) {
      this.productService.getProduct(params.id).subscribe(
        res => {
          this.product = res;
          this.edit = true;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  createProduct() {
    console.log('Create the product');
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

  updateProduct() {
    console.log('Update the product');
    this.productService.updateProduct(this.product._id, this.product).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/product']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
