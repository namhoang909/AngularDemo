import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-page-system',
  templateUrl: './detail-page-system.component.html',
  styleUrls: ['./detail-page-system.component.css']
})
export class DetailPageSystemComponent implements OnInit {
  @Input() theaterSystem: any;
  theater: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.theater = this.theaterSystem.cumRapChieu;
  }

}
