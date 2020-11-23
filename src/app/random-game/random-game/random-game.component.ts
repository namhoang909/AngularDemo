import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-game',
  templateUrl: './random-game.component.html',
  styleUrls: ['./random-game.component.css']
})
export class RandomGameComponent implements OnInit {
  count: number;
  initialValue: number;
  message: string;
  constructor() { }

  ngOnInit(): void {
    this.GenerateInt(1, 100);
  }

  GenerateInt(min, max) {
    this.initialValue = Math.floor(Math.random() * (max - min + 1)) + min;
    this.count = 6;
  };

  CheckResult(value: number) {
    if(value > this.initialValue) {
      this.message = "The number you guess is higher than expected value.";
      this.CountChange();
    }else if(value < this.initialValue) {
      this.message = "The number you guess is less than expected value.";
      this.CountChange();
    }else{
      this.message = "Congratulation! You picked the right answer.";
      this.GenerateInt(1, 100);
    }
  }

  CountChange() {
    this.count--;
    if(this.count === 0) {
      this.message = "Game is over. New number will be generate.";
      this.GenerateInt(1, 100);
    }
  }
}
