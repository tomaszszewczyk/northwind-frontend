import {Component, OnInit} from '@angular/core';
import {Territory} from '../territory';
import {TerritoriesService} from '../territories.service';

@Component({
    selector: 'app-territories',
    templateUrl: './territories.component.html',
    styleUrls: ['./territories.component.css']
})
export class TerritoriesComponent implements OnInit {
    loading = false;
    allTerritories: Territory[];
    collectionSize: number;
    pageSize = 10;
    page = 1;

    constructor(private territoriesService: TerritoriesService) {
    }

    ngOnInit() {
        this.loadProducts();
    }

    loadProducts(): void {
        this.loading = true;
        this.territoriesService.getTerritories().subscribe(territories => {
            this.loading = false;
            this.allTerritories = territories;
            this.collectionSize = territories.length;
        });
    }

    get territories(): Territory[] {
        if (this.allTerritories == null) {
            return null;
        } else {
            return this.allTerritories.slice(this.pageSize * (this.page - 1), this.pageSize * this.page);
        }
    }
}
