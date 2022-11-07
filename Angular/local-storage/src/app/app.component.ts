import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'local-storage';
  data: any;
  savedata() {
    let user = { id: 1, name: 'nkm',email : 'nkm@robosoftin.com' }
    localStorage.setItem('data', JSON.stringify(user));
  }
  getdata(){
    let data:any =localStorage.getItem('data');
    this.data = JSON.parse(data);
  }

  clrdata(){
    localStorage.clear()
  }
}
