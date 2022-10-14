import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-forms';
  reactiveForm: FormGroup;


  ngOnInit() {
    this.reactiveForm = new FormGroup({
      personalDetails: new FormGroup({
        name: new FormControl(null, [Validators.required,Validators.pattern('[/^a-zA-Z]+$')]),
        age: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required,Validators.email]),
        contact: new FormControl(null, [Validators.required,Validators.maxLength(10),Validators.minLength(10)])
      }), 
      symptoms: new FormArray([
        new FormControl(null)
      ]),
      gender: new FormControl(null)
    });
  }
  addSymptoms(){
    (<FormArray>this.reactiveForm.get('symptoms')).push(new FormControl(null))

  }
  onSubmit(){
    console.log(this.reactiveForm);
    if(this.reactiveForm.valid){
    alert("Your appointment has been considered.")
    }
  }

 
}
