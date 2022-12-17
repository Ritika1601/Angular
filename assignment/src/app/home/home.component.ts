import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {



  data:number=35;



 

  constructor()

  {

    console.log('new data is ' + this.data);


  }

  ngOnChanges()  //angular sets or resets data bound input properties

  {

    console.log('ngonchanges data is ' + this.data);

  }

  ngOnInit(): void { //Initialize the directive or component after displays the data bound properties

    console.log('ngonchanges data is ' + this.data);

  }

  ngDoCheck()//Detect and act upon changes

  {

    console.log('ngDocheck');

  }

  ngAfterContentInit()//Respond external content into the componenrs view

  {

    console.log('ngAfterContentInit');

  }

  ngAfterContentChecked() //respond after angular checks the content projected into the directive

  {

    console.log('ngAfterContentchecked');

  }

  ngAfterViewinit()//respond after angualar initializes the components view

  {

    console.log('ngAfterViewInit');

  }

  ngAfterViewChecked() //respond after angular checks the components views that contains the directive

  {

    console.log('ngAfterViewChecked');

  }

  ngOnDestroy() //to avoid memory leaks and destroys the directive or component

  {

    console.log('ngondestroy');

  }

  add()

  {

    this.data+=50;

  

  }

  delete()

  {

    this.data-=30;

  }


}