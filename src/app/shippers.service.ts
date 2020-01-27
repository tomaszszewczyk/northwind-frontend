import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {Shipper} from './shipper';

@Injectable({
  providedIn: 'root'
})
export class ShippersService {
	url = 'http://localhost:8080/shipper'

  	constructor(private http: HttpClient) { }

  	getShippers(): Observable<Shipper[]> {
  		return this.http.get<Shipper[]>(this.url);
  	}
}
