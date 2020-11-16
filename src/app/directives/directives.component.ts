import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isLogin: boolean = false;

  color: string = "";

  productList: any[] = [
    {product: "Samsung Galaxy S10", price: "$1000"},
    {product: "Iphone 11", price: "$1100"},
    {product: "Nokia 8.1", price: "$500"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  handleLogout(){
    this.isLogin = false;
  }

  handleLogin(){
    this.isLogin = true;
  }

  changeColor(value){
    this.color = value;
  }
}
