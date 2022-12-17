import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit{
    
    name:string="Ritika Maheshwari";
    submitted = false;


    constructor()
    {

    }
    onSubmit(){
      this.submitted = true;
      this.name="";
    }
  
     getCurrentModel() { 
      return JSON.stringify(this.name); 
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
