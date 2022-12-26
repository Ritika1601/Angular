import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { ConsoleReporter } from 'jasmine';
import { CommonserviceService } from '../commonservice.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  allProperty:any;
  e:Employee[]=[];
  employee!:FormGroup;
  emp:Employee = new Employee();
  showAdd!:boolean;
  showedit!:boolean;
  submitted = false;


  //emp employee = new this.employee();
  constructor(private fb:FormBuilder,public s: CommonserviceService,private router:Router)
  {
    this.employee=this.fb.group({

      id:[''],
      name:[''],
      mob:[''],
      addr:[''],
    })

  }
 


  ngOnInit(): void {
    this.getAllproperty();
    
  }
  getAllproperty()
  {
    this.s.getdata().subscribe((res)=>{
      this.allProperty=res;
      console.warn(this.allProperty);
      
    }

    )
  }
  addAllProperty()
  {
    if(this.employee.value['id'] == ''){
    this.emp.id=this.employee.value.id;
    this.emp.name=this.employee.value.name;
    this.emp.mob=this.employee.value.mob;
    this.emp.addr=this.employee.value.addr;
    console.log(this.emp);
    this.s.adddata(this.emp).subscribe((res)=>
    {
      console.log(res);
      alert("Record Added");
   
      this.getAllproperty();
    })}
    else{
      console.log(this.employee.value);
      this.s.Updatedata(this.employee.value,this.employee.value['id']);
      alert("Record Updated");
      window.location.reload();
    }
    
  }
  deleteProperty(data:any)
  {
    this.s.Deletedata(data.id).subscribe((res)=>{
      alert("Record Deleted");
      this.getAllproperty();
    })
  }

  Edit(emp:Employee){
    this.employee = new FormGroup({
      id: new FormControl(emp.id),
      name: new FormControl(emp.name),
      mob: new FormControl(emp.mob),
      addr:new FormControl(emp.addr),
      
    })
    
    
    
  }
  Reset()
  {
    let ref = document.getElementById('clear');
    ref?.click();
    this.employee.reset();
    this.getAllproperty();
  }

  
    
  }


