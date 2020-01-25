import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from './order';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  url = 'http://localhost:8080/order';

  constructor(private http: HttpClient) {
  }

  getCount(): Observable<number> {
    return this.http.get<number>(this.url + '/count');
  }

  getOrders(start: number, end: number): Observable<Order[]> {
    return this.http
      .get<Order[]>(this.url + `?start=${start}&end=${end}`)
      .pipe(map(orders => {
        orders.forEach(order => {
          order.orderDate = new Date(order.orderDate);
          order.requiredDate = new Date(order.requiredDate);
          order.shippedDate = new Date(order.shippedDate);
          return order;
        });
        return orders;
      }));
  }
}
