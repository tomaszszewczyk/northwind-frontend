import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductsService} from '../products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    loading = false;
    allProducts: Product[];
    collectionSize: number;
    pageSize = 10;
    page = 1;

    constructor(private productService: ProductsService) {
    }

    ngOnInit() {
        this.loadProducts();
    }

    loadProducts(): void {
        this.loading = true;
        this.productService.getProducts().subscribe(products => {
            this.loading = false;
            this.allProducts = products;
            this.collectionSize = products.length;
        });
    }

    get products(): Product[] {
        if (this.allProducts == null) {
            return null;
        } else {
            return this.allProducts.slice(this.pageSize * (this.page - 1), this.pageSize * this.page);
        }
    }

}
