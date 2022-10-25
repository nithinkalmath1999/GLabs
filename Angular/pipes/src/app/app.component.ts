import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  lowerCaseExample ="ROBOSOFT TECHNOLOGIES"
  upperCaseExample = "robosoft technologies"
  dateExample = Date.now();
  jsonExample = {username:'Nkm', e_id:'RT022', dept:'sde'}
  currencyExample = 3200;
  percentageExample= 0.3232;




  users =[{
    firstName : "Nithin",
    email : "nkm@gmail.com",
    age : '23'
  },
  {
    firstName : "Rahu;",
    email : "yrs@gmail.com",
    age : '22'
  }];
}
