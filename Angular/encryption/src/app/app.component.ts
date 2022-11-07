import { Component,OnInit } from '@angular/core';
import * as cryp from 'crypto-js'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'encryption';
  enc :any;
  dec:any;
  ngOnInit(){
    this.enc = cryp.AES.encrypt('nithin','Hi').toString();
   
    console.log("Encrypted data = "+this.enc);

    this.dec = cryp.AES.decrypt(this.enc,'Hi').toString(cryp.enc.Utf8);
    console.log("Decrypted data = "+this.dec);
  }

  
}
