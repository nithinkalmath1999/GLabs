import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';

  userModel = new User('','',8162193515, 22,'','',true);

  submitted = false;

  onSubmit() {
     this.submitted = true;
     }

     submit(){
      alert("subitted");
     }
}
