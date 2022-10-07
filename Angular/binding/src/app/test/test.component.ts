import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>Welcome {{name}}</h2>
  <h2>{{"Hello " + name}}<h2>
  <h3>{{2*2}}<h3>
  <h3>{{name.length}}<h3>
  <h6>{{name.toUpperCase()}}<h6>
  <h6>{{greetUser()}}<h6>
`,
  styles: []
})
export class TestComponent implements OnInit {
public name = "Nithin Kalmath";
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Good Morning " + this.name;
    
  }
}
