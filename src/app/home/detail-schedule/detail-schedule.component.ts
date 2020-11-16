import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-schedule',
  templateUrl: './detail-schedule.component.html',
  styleUrls: ['./detail-schedule.component.css']
})
export class DetailScheduleComponent implements OnInit {
  @Input() scheduleItem: any;
  constructor() { }

  ngOnInit(): void {
  }

}
