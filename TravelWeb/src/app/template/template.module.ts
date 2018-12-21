import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent, SignInComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { MatBadgeModule, MatIconModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SignInComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatBadgeModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatBadgeModule,
    MatIconModule,
    MatDialogModule,
  ],
  entryComponents: [
    SignInComponent,
  ]
})
export class TemplateModule { }
