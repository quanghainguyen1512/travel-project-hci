import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingSumaryComponent } from './rating-sumary.component';

@NgModule({
  declarations: [RatingSumaryComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RatingSumaryComponent,
  ]
})
export class RatingSumaryModule { }
