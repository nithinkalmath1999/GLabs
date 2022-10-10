import { Component, Directive, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-department-detail',
  template: `
    <h3> You selected department with id = {{id1}}</h3>
    <button (click)="goPrevious()">Previous</button> || 
    <button (click)="goNext()">Next</button><br><br>
    <div><button (click)="goBack()">Back</button></div> 
    
  `,
  styles: [
  ]
})

// @Directive({
//   selector: '[hostBindingDemo]'
// })

export class DepartmentDetailComponent implements OnInit {
  public id1: any;
  // public name:any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.id1 = id;

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.id1 = id;
    });



  }

  goPrevious() {
    let previousId = parseInt(this.id1) - 1;
    this.router.navigate(['/departments', previousId])
  }

  goNext() {
    let nextId = parseInt(this.id1) + 1;
    this.router.navigate(['/departments', nextId])
  }
  goBack() {
    let selectedId = this.id1 ? this.id1 : null;
    // this.router.navigate(['/departments', { id: selectedId }]);
    this.router.navigate(['../', {id:selectedId}]),{relativeTo: this.route}
  }


}
