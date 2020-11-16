import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.css']
})
export class SeatListComponent implements OnInit {
  
  seatList = [
    {SoGhe:1, TenGhe:"số 1", Gia:100, TrangThai:false},
    {SoGhe:2, TenGhe:"số 2", Gia:100, TrangThai:false},
    {SoGhe:3, TenGhe:"số 3", Gia:100, TrangThai:false},
    {SoGhe:4, TenGhe:"số 4", Gia:100, TrangThai:false},
    {SoGhe:5, TenGhe:"số 5", Gia:100, TrangThai:false},
    {SoGhe:6, TenGhe:"số 6", Gia:100, TrangThai:false},
    {SoGhe:7, TenGhe:"số 7", Gia:100, TrangThai:false},
    {SoGhe:8, TenGhe:"số 8", Gia:100, TrangThai:false},
    {SoGhe:9, TenGhe:"số 9", Gia:100, TrangThai:false},
    {SoGhe:10, TenGhe:"số 10", Gia:100, TrangThai:false},
    {SoGhe:11, TenGhe:"số 11", Gia:100, TrangThai:false},
    {SoGhe:12, TenGhe:"số 12", Gia:100, TrangThai:false},
    {SoGhe:13, TenGhe:"số 13", Gia:100, TrangThai:false},
    {SoGhe:14, TenGhe:"số 14", Gia:100, TrangThai:false},
    {SoGhe:15, TenGhe:"số 15", Gia:100, TrangThai:false},
    {SoGhe:16, TenGhe:"số 16", Gia:100, TrangThai:false},
    {SoGhe:17, TenGhe:"số 17", Gia:100, TrangThai:false},
    {SoGhe:18, TenGhe:"số 18", Gia:100, TrangThai:false},
    {SoGhe:19, TenGhe:"số 19", Gia:100, TrangThai:false},
    {SoGhe:20, TenGhe:"số 20", Gia:100, TrangThai:false},
    {SoGhe:21, TenGhe:"số 21", Gia:100, TrangThai:false},
    {SoGhe:22, TenGhe:"số 22", Gia:100, TrangThai:false},
    {SoGhe:23, TenGhe:"số 23", Gia:100, TrangThai:false},
    {SoGhe:24, TenGhe:"số 24", Gia:100, TrangThai:true},
    {SoGhe:25, TenGhe:"số 25", Gia:100, TrangThai:false},
    {SoGhe:26, TenGhe:"số 26", Gia:100, TrangThai:false},
    {SoGhe:27, TenGhe:"số 27", Gia:100, TrangThai:false},
    {SoGhe:28, TenGhe:"số 28", Gia:100, TrangThai:false},
    {SoGhe:29, TenGhe:"số 29", Gia:100, TrangThai:false},
    {SoGhe:30, TenGhe:"số 30", Gia:100, TrangThai:false},
  ]

  bookingSeatList = [];

  amountSeatBooked: number = 0;
  amountSeatNBooked: number = 0;

  constructor() { }

  ngOnInit(): void {
    for(let seat of this.seatList){
      if(!seat.TrangThai){
        this.amountSeatNBooked++;
      }
    }
  }

  SeatBookingRoot(status, seat){
    if(status){
      this.amountSeatBooked++;
      this.amountSeatNBooked--;
      this.bookingSeatList.push(seat);
    }else{
      this.amountSeatBooked--;
      this.amountSeatNBooked++;
      for(let index in this.bookingSeatList){
        if(this.bookingSeatList[index].SoGhe === seat.SoGhe){
          this.bookingSeatList.splice(parseInt(index),1);
        }
      }
    }
    console.log(this.bookingSeatList)
  }
  
  SeatAdding(seat){
    this.seatList.push(seat);
  }
}
