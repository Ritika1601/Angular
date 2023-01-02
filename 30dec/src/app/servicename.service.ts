import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { constructor } from 'jasmine';
import { EmployeeForm } from './employees';
import { BasicInfo, BankDetails, Address } from './model';

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
  BasicInfo(basic:BasicInfo){
    console.log(basic);
    return this.http.post<BasicInfo>(this.url+"/BasicInfo",basic);
  }
  BankDetails(bank:BankDetails){
    console.log(bank);
    return this.http.post<BankDetails>(this.url+"/BankDetails",bank);
  }
  Address(addr:Address){
    return this.http.post<Address>(this.url+"/Address",addr);
  }
}

