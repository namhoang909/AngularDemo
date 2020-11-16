import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SeatListComponent } from '../seat-list/seat-list.component';

@Component({
  selector: 'app-edit-seat-list',
  templateUrl: './edit-seat-list.component.html',
  styleUrls: ['./edit-seat-list.component.css']
})
export class EditSeatListComponent implements OnInit {
  @ViewChild(SeatListComponent) SeatListCom;
  @ViewChild('title') seatAddingTittle: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  SeatAddingP(...param: any[]){
    let addedSeat = {
      SoGhe: param[0], 
      TenGhe: param[1], 
      Gia:param[2], 
      TrangThai: null,
    }
    if(param[3] == "false"){
      addedSeat.TrangThai = false;
    }else if(param[3] == "true"){
      addedSeat.TrangThai = true;
    }
    console.log(addedSeat);

    this.SeatListCom.SeatAdding(addedSeat);
    this.seatAddingTittle.nativeElement.innerHTML = "Added"
  }
}
