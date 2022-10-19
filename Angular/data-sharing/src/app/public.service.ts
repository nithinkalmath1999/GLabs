import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  public publicSubject1 = new BehaviorSubject<string>("Default message");
  public publicSubject2 = new Subject<string>();

  constructor() { }

  sendData(data: string){
    this.publicSubject1.next(data);
  }

  sendData2(data: string){
    this.publicSubject2.next(data);
  }
}
 