import { Component, Input } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import {AbstractControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})

export class AboutusComponent {
  @Input()
  maxNumberOfCharacters = 60;
  counter = true;

  numberOfCharacters1 = 0;
  numberOfCharacters2 = 0;
  interaction = {
    textValue: ''
  };

  onKeyUp(event: any): void {
    this.numberOfCharacters1 = event.target.value.length;

    if (this.numberOfCharacters1 > this.maxNumberOfCharacters) {
      event.target.value = event.target.value.slice(0, this.maxNumberOfCharacters);
      this.numberOfCharacters1 = this.maxNumberOfCharacters;
    }
  }


  }
 



