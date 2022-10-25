import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  saveUser() {
    const postData = {
      name: "Nitin",
      email: "nkm@gmail.com",
      id: 10
    }
    this.http.post('https://jsonplaceholder.typicode.com/users', postData).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);

    });


    //post method-2
    // return this.http.post('https://jsonplaceholder.typicode.com/users', postData);

  }

  updateUser() {
    const putData = {
      name: "Robosoft",
      id: 10

    }
    this.http.put('https://jsonplaceholder.typicode.com/users/1', putData).subscribe(data=>{console.log(data);
    }, err => {
      console.log(err);

    });

  // return this.http.put('https://jsonplaceholder.typicode.com/users/1', putData);

  }


delUser(){
 return this.http.delete('https://jsonplaceholder.typicode.com/users/4');
}

}
