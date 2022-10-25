import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  // userdata : any;
  // pushdata : any;

  constructor(private userService : UsersService) { }


  ngOnInit(): void {
    //post method 1
    this.userService.saveUser();

    //post method 2
    // this.userService.saveUser().subscribe(data=>this.userdata=data);



    this.userService.updateUser();

    // this.userService.updateUser().subscribe(data=>this.pushdata=data);

  }

}
