import { Product } from './../interfaces/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) {  }

  getProducts() {}

  getProduct(id: string) {}

  createProduct(product: Product) {}

  deleteProduct(id: string) {}

  updateProduct(id: string, product: Product) {}

}
