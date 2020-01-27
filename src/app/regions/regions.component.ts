import {Component, OnInit} from '@angular/core';
import {Region} from '../region';
import {RegionsService} from '../regions.service';

@Component({
    selector: 'app-regions',
    templateUrl: './regions.component.html',
    styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
    loading = false;
    allRegions: Region[];
    collectionSize: number;
    pageSize = 10;
    page = 1;

    constructor(private regionService: RegionsService) {
    }

    ngOnInit() {
        this.loadProducts();
    }

    loadProducts(): void {
        this.loading = true;
        this.regionService.getRegions().subscribe(regions => {
            this.loading = false;
            this.allRegions = regions;
            this.collectionSize = regions.length;
        });
    }

    get regions(): Region[] {
        if (this.allRegions == null) {
            return null;
        } else {
            return this.allRegions.slice(this.pageSize * (this.page - 1), this.pageSize * this.page);
        }
    }
}
