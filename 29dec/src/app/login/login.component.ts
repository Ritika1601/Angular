// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

// }
import { Component } from '@angular/core';

import { ThemePalette } from '@angular/material/core';

import {MatDialog} from '@angular/material/dialog';



export interface ChipColor

{

  name:string;

  color:ThemePalette;

}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})

export class LoginComponent {

  title = 'materialfinaldemo';

  sports:string[]=['cricket','football','hockey','snooker'];

  colors:ChipColor[]=

  [

    {name:'cricket',color:undefined},

    {name:'football',color:'primary'},

    {name:'hockey',color:'warn'},

    {name:'snooker',color:'accent'},

  ];



 

  constructor(public dialog: MatDialog) {}



  openDialog() {

    this.dialog.open(DialogExample);

  }

}

// @Component({

//   selector: 'dialog',

//   templateUrl: './dialog.html',

// })

export class DialogExample {}