import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [DirectivesComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DirectivesComponent
  ]
})
export class DirectivesModule { }
