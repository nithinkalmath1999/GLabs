import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-sharing';

  //to child
  public name = '"Angular"';
  //msg from child 1 to parent
  public message = "";

  //msg from child 2 to parent
  public message1 ="";

  //msg from child 1 to child 2 through parent
  public sentToSib = "";
  
  //msg from child 2 to child 1 through parent
  public sentToSib1 = "";

  // alternateName: number=0;

  // alter(){
  //   this.name='Angular';
  // }
}
