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
import { ProductsComponent } from './products/products.component';
import { RegionsComponent } from './regions/regions.component';
import { ShippersComponent } from './shippers/shippers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { TerritoriesComponent } from './territories/territories.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    EmployeesComponent,
    CustomersComponent,
    OrdersComponent,
    ProductsComponent,
    RegionsComponent,
    ShippersComponent,
    SuppliersComponent,
    TerritoriesComponent
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
