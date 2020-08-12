import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise2Component } from './exercise2.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ItemComponent } from './item/item.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [Exercise2Component, HeaderComponent, ContentComponent, ItemComponent, FooterComponent, SliderComponent],
  imports: [
    CommonModule
  ],
  exports: [Exercise2Component]
})
export class Exercise2Module { }
