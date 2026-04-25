import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dataUrl = 'assets/data/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
  }

  getProductById(id: number): Observable<Product[]> {
    // In a real app we would hit an endpoint like /products/:id
    // Since we just have a static JSON, let's just return the whole list and let the component filter it.
    // Alternatively we can use RxJS map here, but returning the whole observable is easier for now
    return this.http.get<Product[]>(this.dataUrl);
  }
}
