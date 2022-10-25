import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';

  Success = 1;
  Success1 = 1;
  Success2 = 1;

  Angular="10";
  team ='team';

  teams = [{
    name:'John',
    id: 1
  },
  {
    name:'Dane',
    id: 2
  },
  {
    name:'Mark',
    id: 3
  },
  {
    name:'John',
    id: 4
  },
  {
    name:'Dane',
    id: 5
  },
  {
    name:'Mark',
    id: 6
  }]
}
