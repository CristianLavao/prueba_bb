import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/employee',
    pathMatch: 'full'
  },
  {
    path: 'employee',
    component: EmployeeListComponent
  },
  {
  path: 'employee/add',
  component: EmployeeFormComponent
  },
  {
    path: 'employee/edit/:id',
    component: EmployeeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
