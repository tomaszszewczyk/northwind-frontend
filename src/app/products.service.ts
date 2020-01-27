import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'http://localhost:8080/product';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
