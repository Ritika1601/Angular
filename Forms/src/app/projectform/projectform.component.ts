import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectForm } from '../model/model.component';

@Component({
  selector: 'app-projectform',
  templateUrl: './projectform.component.html',
  styleUrls: ['./projectform.component.css']
})
export class ProjectformComponent implements OnInit{

  constructor(private fb:FormBuilder) { }
  user:ProjectForm[] = [];
  Projectform!:FormGroup;
  isDisable:boolean = true;
  isTest:boolean = false;
  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  
  ngOnInit(): void {


    this.Projectform=this.fb.group({

      projectName:['',[Validators.required]],
      mail:['',[Validators.required,Validators.pattern(this.emailpattern)]],
      projectStatus:['',[Validators.required]],
      
    })
  }
 

  onSubmit()
  {
    if(this.Projectform.valid && this.Projectform.value['projectName'] != 'test')
    {
     console.log(this.Projectform.value);
     console.log(this.Projectform.value['projectName']);
     console.log("error");
    }
    else if(this.Projectform.value['projectName'] == 'test'){
      this.isTest = true;
      console.log("test");
    }
    else{
     this.isDisable=false;
     console.log("Empty");
    }
 }
}
