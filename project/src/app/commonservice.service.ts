import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Employee } from './model/employee';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http:HttpClient) {


   }
   adddata(data:any)
   {
    return this.http.post('http://localhost:3000/Employee',data).pipe(map((res:any)=>
    {
      return res;
    }))
   }
   getdata()
   {
    return this.http.get('http://localhost:3000/Employee').pipe(map((res:any)=>
    {
      return res;
    }))
   }
   Updatedata(data:Employee,id:number)
   {
    return this.http.put('http://localhost:3000/Employee/'+id,data).subscribe()
  }
   Deletedata(id:number)
   {
    return this.http.delete('http://localhost:3000/Employee/'+id).pipe(map((res:any)=>
    {
      return res;
    }))
   }
}
