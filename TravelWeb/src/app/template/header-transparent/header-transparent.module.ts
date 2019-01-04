import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTransparentComponent } from './header-transparent.component';

@NgModule({
  declarations: [HeaderTransparentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderTransparentComponent,
  ]
})
export class HeaderTransparentModule { }
