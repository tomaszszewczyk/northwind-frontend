import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {Territory} from './territory';

@Injectable({
  providedIn: 'root'
})
export class TerritoriesService {
    url = 'http://localhost:8080/territory';

    constructor(private http: HttpClient) {
    }

    getTerritories(): Observable<Territory[]> {
        return this.http.get<Territory[]>(this.url);
    }
}
