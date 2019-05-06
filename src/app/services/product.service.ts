import { Product } from './../interfaces/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) {  }

  getProducts(): Observable<Product[]> {
    return;
  }

  getProduct(id: string): Observable<Product> {
    return;
  }

  createProduct(product: Product): Observable<Product> {
    return;
  }

  deleteProduct(id: string): Observable<Product> {
    return;
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return;
  }

}
