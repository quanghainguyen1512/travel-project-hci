import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, AppRoutingModule, BrowserAnimationsModule, NgbModule
        // NgxPaginationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}