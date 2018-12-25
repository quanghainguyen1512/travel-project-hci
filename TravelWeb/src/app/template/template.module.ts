import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent, SignInComponent, SignOutComponent, NewsFeedComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { MatBadgeModule, MatIconModule, MatDialogModule, MatMenuModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SignInComponent, SignOutComponent, NewsFeedComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatBadgeModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
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
    NewsFeedComponent,
  ]
})
export class TemplateModule { }
