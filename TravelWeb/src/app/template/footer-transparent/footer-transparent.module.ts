import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterTransparentComponent } from './footer-transparent.component';

@NgModule({
  declarations: [FooterTransparentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FooterTransparentComponent,
  ]
})
export class FooterTransparentModule { }
