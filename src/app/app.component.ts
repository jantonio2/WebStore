import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-store';

  constructor() { }

  nombre:string="";
  apellido:string="xyz";

  ngOnInit() {
  }
}
