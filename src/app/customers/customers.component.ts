import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomersService} from '../customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  loading = false;
  allCustomers: Customer[];
  collectionSize: number;
  pageSize = 10;
  page = 1;

  constructor(private customersService: CustomersService) {
  }

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.loading = true;
    this.customersService.getCustomers().subscribe(customers => {
      this.allCustomers = customers;
      this.loading = false;
      this.collectionSize = this.allCustomers.length;
    });
  }

  get customers(): Customer[] {
    if (this.allCustomers == null) {
      return null;
    } else {
      return this.allCustomers.slice(this.pageSize * (this.page - 1), this.pageSize * this.page);
    }
  }
}
