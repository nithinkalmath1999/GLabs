import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ww-sample';
  sum: number = 0;
  bg: string = 'bg';




  onClick() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./app.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        alert(data.result)
      };
      worker.postMessage(this.sum);
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  
  change() {
    if (this.bg == 'bg') {
      this.bg = 'bg1';
    }
    else if (this.bg == 'bg1') {
      this.bg = 'bg'
    }
  }
}

