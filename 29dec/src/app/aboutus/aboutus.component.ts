import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExample } from '../login/login.component';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  constructor(public dialog: MatDialog) {}

  dclose(){
    this.dialog.closeAll();
  }

  openDialog() {

    this.dialog.open(DialogExample,{

      width: '250px',

      height:'250px'

    });

  }

}

