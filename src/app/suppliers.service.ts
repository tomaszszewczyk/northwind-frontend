import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Supplier} from './supplier';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
    url = 'http://localhost:8080/supplier';

    constructor(private http: HttpClient) {
    }

    getSuppliers(): Observable<Supplier[]> {
        return this.http.get<Supplier[]>(this.url);
    }
}
