import {Component, OnInit} from '@angular/core';
import {Shipper} from '../shipper';
import {ShippersService} from '../shippers.service';

@Component({
  selector: 'app-shippers',
  templateUrl: './shippers.component.html',
  styleUrls: ['./shippers.component.css']
})
export class ShippersComponent implements OnInit {
	loading = false;
	allShippers: Shipper[];
	collectionSize: number;
	pageSize = 10;
	page = 1;

 	constructor(private shippersService: ShippersService) { }

 	ngOnInit() {
 		this.loadShippers();
 	}

 	loadShippers(): void {
 		this.loading = true;
 		this.shippersService.getShippers().subscribe(shippers => {
 			this.loading = false;
 			this.allShippers = shippers;
 			this.collectionSize = shippers.length;
 		});
 	}

 	get shippers(): Shipper[] {
 		if(this.allShippers == null) {
 			return null;
 		} else {
 			return this.allShippers.slice(this.pageSize * (this.page - 1), this.pageSize * this.page);
 		}
 	}

}
