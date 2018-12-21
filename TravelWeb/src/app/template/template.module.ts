import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent, SignInComponent, SignOutComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { MatBadgeModule, MatIconModule, MatDialogModule, MatMenuModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SignInComponent, SignOutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatBadgeModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatBadgeModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
  ],
  entryComponents: [
    SignInComponent,
    SignOutComponent,
  ]
})
export class TemplateModule { }
