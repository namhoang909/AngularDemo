import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-game',
  templateUrl: './random-game.component.html',
  styleUrls: ['./random-game.component.css']
})
export class RandomGameComponent implements OnInit {
  count: number = 6;
  initialValue: number;
  message: string;
  constructor() { }

  ngOnInit(): void {
    this.GenerateInt(1, 100);
  }

  GenerateInt(min, max) {
    this.initialValue = Math.floor(Math.random() * (max - min)) + min;
  };

  CheckResult(value: number) {
    if(value > this.initialValue) {
      this.message = "The number you guess is higher than expected value.";
    }else if(value < this.initialValue) {
      this.message = "The number you guess is less than expected value.";
    }else{
      this.message = "Congratulation you picked the right answer.";
    }
    
  }
}
