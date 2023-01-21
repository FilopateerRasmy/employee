import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employees } from '../model/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  // in real application url will be in the enviroment or proxy config
  url= '/assets/data/employees.json'
  constructor(private http:HttpClient) { }

  getEmployees(){
    return this.http.get<Employees[]>(this.url)
  }
}
