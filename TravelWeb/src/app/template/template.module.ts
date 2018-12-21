import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { MatBadgeModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatBadgeModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatBadgeModule,
    MatIconModule,
  ]
})
export class TemplateModule { }
