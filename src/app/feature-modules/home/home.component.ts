import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cu-home',
  template: `<router-outlet></router-outlet>`,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
