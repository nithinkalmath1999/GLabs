import { Component, EventEmitter, Input,Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PublicService } from '../public.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

// from parent
 @Input() public parentData: string = '';

 //To parent 
 @Output() public childEvent = new EventEmitter();
 
 
 @Input() public childData2: string = '';
 
 @Output() public sibblingEvent = new EventEmitter();


 dataFromSib1:string='';

//  @Input() alternateNameValue :number=0;

 constructor( private pService : PublicService) { }

//  ngOnChanges(changes: SimpleChanges): void {
//    // this.parentData = this.parentData ;
//    console.log("ngon",changes);
//    this.alternateNameValue= changes.alternateNameValue.currentValue + 100;
   
//  }

  ngOnInit(): void {
    this.pService.publicSubject2.subscribe(data => this.dataFromSib1 = data);

  }


//To parent
  sayHello(){
    this.childEvent.emit('"Hello, I am Child Component - 1"');
  }

  //To Sibbling
  sayHelloToSibbling(){
    this.sibblingEvent.emit('"Hello, I am your Sibbling"');

  }

//To sibbling without parent
withoutParent1(){
  this.pService.sendData('"I am your Brother"');
}
}
