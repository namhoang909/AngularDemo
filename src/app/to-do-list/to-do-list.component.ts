import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDoList: any[] = [];
  content: string;
  @ViewChild("formAddItem") formAddTask: NgForm;
  @ViewChildren(ToDoItemComponent) toDoItemComponent: QueryList<ToDoItemComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  AddToList(task) {
    this.toDoList.push({content: task, status: false});
  }

  DeleteTask(task) {
    const index = this.toDoList.findIndex(
      (item) => item.content === task.content
    );
    if(index != -1) {
      this.toDoList.splice(index, 1);
    };
  }

  ChangeStatus(task) {
    const index = this.toDoList.findIndex(
      (item) => item.content === task.content
    );
    if(index != -1) {
      this.toDoList[index] = task;
    };
  }

}

