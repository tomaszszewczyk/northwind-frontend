import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Region} from './region';

@Injectable({
    providedIn: 'root'
})
export class RegionsService {
    url = 'http://localhost:8080/region';

    constructor(private http: HttpClient) {
    }

    getRegions(): Observable<Region[]> {
        return this.http.get<Region[]>(this.url);
    }
}
