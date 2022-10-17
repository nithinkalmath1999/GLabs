import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


interface Section {

  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angular-materials';

  checked = false;
  indeterminate = false;
  professional = false;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  sections: Section[] = [
    { viewValue: 'Section A'},
    { viewValue: 'Section B'},
    { viewValue: 'Section C'},
  ];


  formatLabel(value: number) {
    if (value >= 10) {
      return Math.round(value / 1) + '%';
    }

    return value;
  }
}
