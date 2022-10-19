import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PublicService } from '../public.service';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {


  @Input() public parentData1: string = '';
  @Input() public childData1: string = '';
  @Output() public childEvent1 = new EventEmitter();
  @Output() public childEvent2 = new EventEmitter();


  dataFromSib: string = '';

  constructor(private pService: PublicService) { }

  ngOnInit(): void {
    this.pService.publicSubject1.subscribe(data => this.dataFromSib = data);
  }

  sayHello1() {
    this.childEvent1.emit('"Hello, I am Child Component - 2"');
  }

  sayHello2() {
    this.childEvent2.emit('"Hello, I am your Sibbling"');
  }



  withoutParent2() {
    this.pService.sendData2('"Hello Brother"');
  }

}
