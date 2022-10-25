import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-del-customer',
  templateUrl: './del-customer.component.html',
  styleUrls: ['./del-customer.component.css']
})
export class DelCustomerComponent implements OnInit {

  constructor(private userService : UsersService) { }

  ngOnInit(): void {


    this.userService.delUser().subscribe(data=>{
      console.log("Deleted Successfully");
    },
    err=>{
      console.log(err);
    });
    
  }


 
}
