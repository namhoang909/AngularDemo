import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-theater-system',
  templateUrl: './theater-system.component.html',
  styleUrls: ['./theater-system.component.css']
})
export class TheaterSystemComponent implements OnInit {
  @Input() theaterSystem: any;
  constructor() { }

  ngOnInit(): void {
  }

}
