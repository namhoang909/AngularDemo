import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  demo: string = "Hello";

  name: string = "";

  email: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  changeName(value){
    this.name = value;
  }

}
