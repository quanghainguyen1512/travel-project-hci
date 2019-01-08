import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FooterComponent} from './footer/footer.component';
import {HeaderComponent, SignInComponent, SignOutComponent, NewsFeedComponent} from './header/header.component';

import {RouterModule} from '@angular/router';
import {
    MatBadgeModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    MatAutocompleteModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderTransparentComponent } from './header-transparent/header-transparent.component';
import { FooterTransparentComponent } from './footer-transparent/footer-transparent.component';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        SignInComponent,
        SignOutComponent,
        NewsFeedComponent, 
        HeaderTransparentComponent,
        FooterTransparentComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatBadgeModule,
        MatIconModule,
        MatDialogModule,
        MatMenuModule,
        MatButtonModule,
        MatAutocompleteModule,
        ReactiveFormsModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        MatBadgeModule,
        MatIconModule,
        MatDialogModule,
        MatMenuModule,
        MatButtonModule, 
        HeaderTransparentComponent,
        FooterTransparentComponent,
    ],
    entryComponents: [SignInComponent, SignOutComponent, NewsFeedComponent]
})
export class TemplateModule {}