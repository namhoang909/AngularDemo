import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise1Component } from './exercise1.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [Exercise1Component, HeaderComponent, FooterComponent, ContentComponent, SidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [Exercise1Component]
})
export class Exercise1Module { }
