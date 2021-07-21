import { Component, HostBinding, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';

import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  employee: Employee = {
    id: 0,
    fullname: '',
    function: '',
    id_boss: null,
    created_at: new Date()
  };

  edit: Boolean = false;

  constructor(
    private employeeService: EmployeeService,
     private router: Router,
     private activedRoute: ActivatedRoute
     ) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params.id){
      this.employeeService.getEmployee(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.employee = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
  }

  saveNewEmployee(){
    delete this.employee.created_at;
    delete this.employee.id;

    this.employeeService.saveEmployee(this.employee)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/employee']);
      },
      err => console.error(err)
      )
    }
    
    updatedEmployee(){
      delete this.employee.created_at;
      this.employeeService.updateEmployee(this.employee.id, this.employee)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/employee']);
      },
      err => console.log(err)
    )
  }

}
