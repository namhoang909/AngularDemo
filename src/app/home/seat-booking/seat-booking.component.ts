import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css']
})
export class SeatBookingComponent implements OnInit {
  @Input() seatItem;
  @Output() emitStatus = new EventEmitter();
  status: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  SeatBooking(){
    this.status = !this.status;
    this.emitStatus.emit(this.status)
  }

}
