import {Component} from '@angular/core';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Northwind Demo Shop';
  active: number;

  constructor(private paginationConfig: NgbPaginationConfig) {
    paginationConfig.maxSize = 10;
  }
}
