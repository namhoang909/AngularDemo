import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { MovieControlComponent } from './movie-control/movie-control.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {path: '', component: UserManagementComponent},
      {path: 'movieAdmin', component: MovieControlComponent},
      {path: 'userAdmin', component: UserManagementComponent},
    ]
  }
]

@NgModule({
  declarations: [AdminLayoutComponent, UserManagementComponent, MovieControlComponent, MovieItemComponent, HeaderComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule
  ],
  exports: [
    AdminLayoutComponent,
    UserManagementComponent,
    MovieControlComponent,
    MovieItemComponent,
  ]
})
export class AdminModule { }
