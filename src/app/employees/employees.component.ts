import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EmployeesService} from '../employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  loading = false;
  employees: Employee[];

  constructor(private employeeService: EmployeesService) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.loading = true;
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
      this.loading = false;
    });
  }
}
