import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number;
  faCoffee = faCoffee;
  
  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

}
