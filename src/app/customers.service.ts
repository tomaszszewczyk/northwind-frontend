import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  url = 'http://localhost:8080/customer';

  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
  }
}
