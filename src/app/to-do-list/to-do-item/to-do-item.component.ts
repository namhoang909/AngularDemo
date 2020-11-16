import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() item: any;
  @Output() DeleteItem; ChangeStat = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  DeleteItemFunc() {
    this.DeleteItem.emit(this.item);
  }

  ChangeStatus() {
    this.ChangeStat.emit({...this.item, status: !this.item.status})
  }
}
