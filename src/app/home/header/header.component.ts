import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: any = {};
  isSignin: boolean = false;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.currentUser.subscribe({
      next: (result) => {
        this.currentUser = result;
        if(this.currentUser){
          this.isSignin = true;
        };
      },
    });
  }
}
