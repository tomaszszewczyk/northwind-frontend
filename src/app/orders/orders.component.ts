import { Component, OnInit } from '@angular/core';
import {Order} from '../order';
import {OrdersService} from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  loading = false;
  orders: Order[];
  collectionSize: number;
  private actualPageSize = 10;
  private actualPage = 1;

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.loadOrders();
  }

  get page(): number {
    return this.actualPage;
  }

  set page(value: number) {
    this.actualPage = value;
    this.loadOrders();
  }

  get pageSize(): number {
    return this.actualPageSize;
  }

  set pageSize(value: number) {
    this.actualPageSize = value;
    this.loadOrders();
  }

  loadOrders(): void {
    this.loading = true;
    this.ordersService
      .getOrders(this.actualPageSize * (this.actualPage - 1), this.actualPageSize * this.actualPage)
      .subscribe(orders => {
        this.orders = orders;
        this.loading = false;
      });
    this.ordersService
      .getCount()
      .subscribe(x => this.collectionSize = x);
  }
}
