import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  name:string="Ritika Maheshwari";
  isDirective = false;
  constructor()
  {

  }
  onDisplay(){
    this.isDirective = true;
    this.name;
  }

}
