import { Component, OnInit } from '@angular/core';
import {Supplier} from '../supplier';
import {SuppliersService} from '../suppliers.service'

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
    loading = false;
    allSuppliers: Supplier[];
    collectionSize: number;
    pageSize = 10;
    page = 1;

    constructor(private suppliersService: SuppliersService) { }

    ngOnInit() {
        this.loadSuppliers();
    }

    loadSuppliers(): void {
        this.loading = true;
        this.suppliersService.getSuppliers().subscribe(suppliers => {
            this.allSuppliers = suppliers;
            this.loading = false;
            this.collectionSize = suppliers.length;
        });
    }

    get suppliers(): Supplier[] {
        if (this.allSuppliers == null) {
            return null;
        } else {
            return this.allSuppliers.slice(this.pageSize * (this.page - 1), this.pageSize * this.page);
        }
    }
}
