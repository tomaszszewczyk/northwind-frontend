import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {CategoriesComponent} from './categories/categories.component';

import {HttpClientModule} from '@angular/common/http';
import {EmployeesComponent} from './employees/employees.component';
import {CustomersComponent} from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    EmployeesComponent,
    CustomersComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
