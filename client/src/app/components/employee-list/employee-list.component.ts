import { Component, HostBinding, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  employees: any = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe(
      res => {
        this.employees = res;
      },
      err => console.error(err)
    );
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(
      res =>{
        this.getEmployees();
      },
      err => console.log(err)
    )
  }


}
