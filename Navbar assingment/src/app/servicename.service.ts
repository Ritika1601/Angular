import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { constructor } from 'jasmine';
import { EmployeeForm } from './employees';

@Injectable({
  providedIn: 'root'
})
export class ServicenameService { 
    url:string = "http://localhost:3000";
    constructor(public http:HttpClient) { }
    EmpPost(emp:EmployeeForm){
      console.log(emp);
     return this.http.post<EmployeeForm>(this.url+"/EmployeeForm",emp);
    }
  }
