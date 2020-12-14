import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: any = {};
  isSignin: boolean = false;

  constructor(private auth: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.auth.currentUser.subscribe({
      next: (result) => {
        this.currentUser = result;
      },
    });
    if (Object.keys(this.currentUser).length !== 0) { 
      this.isSignin = true;
    };
  }

  SignOutFunc() {
    localStorage.removeItem('userInfo');
    this.router.navigate(['/signin']);
  }
}
