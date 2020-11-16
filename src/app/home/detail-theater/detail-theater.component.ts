import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-theater',
  templateUrl: './detail-theater.component.html',
  styleUrls: ['./detail-theater.component.css']
})
export class DetailTheaterComponent implements OnInit {
  @Input() theater: any;
  schedule: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.schedule = this.theater.lichChieuPhim;
  }

}
