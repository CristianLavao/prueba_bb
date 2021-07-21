import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from '../models/employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  API_URI = 'http://localhost:3000/api' 

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(`${this.API_URI}/employee`);
  }

  getEmployee(id: number){
    return this.http.get(`${this.API_URI}/employee/${id}`);
  }

  deleteEmployee(id: Number){
    return this.http.delete(`${this.API_URI}/employee/${id}`);
  }

  saveEmployee(employee: Employee){
    return this.http.post(`${this.API_URI}/employee`, employee);
  }

  updateEmployee(id: Number, updatedEmployee: Employee){
    return this.http.put(`${this.API_URI}/employee/${id}`, updatedEmployee);
  }

}
