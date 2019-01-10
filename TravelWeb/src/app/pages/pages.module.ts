import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesComponent} from './pages.component';

import {ReviewModule} from './review/review.module';
import {OverviewModule} from './overview/overview.module';

import {TemplateModule} from '../template/template.module';

import {PagesRoutingModule} from './pages-routing.module';
import {ProfileComponent} from './profile/profile.component';
import {BookinghomeComponent} from './bookinghome/bookinghome.component';
import {BookingComponent} from './booking/booking.component';
import {HomeComponent} from './home/home.component';
import {PlacesComponent} from './places/places.component';

import {MaterialModule} from '../material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material';
import { HeaderTransparentModule } from '../template/header-transparent/header-transparent.module';
import { FooterTransparentModule } from '../template/footer-transparent/footer-transparent.module';
import { RatingSumaryModule } from '../template/rating-sumary/rating-sumary.module';
import { ModalImageModule } from '../template/modal-image/modal-image.module';
import { CommentModule } from '../template/comment/comment.module';
import { RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';

@NgModule({
    declarations: [
        PagesComponent,
        ProfileComponent,
        BookinghomeComponent,
        BookingComponent,
        HomeComponent,
        PlacesComponent,
        CityComponent,
        
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ReviewModule,
        OverviewModule,
        TemplateModule,
        MaterialModule,
        ReactiveFormsModule,
        MatGridListModule,
        RatingSumaryModule,
        ModalImageModule,
        CommentModule,
        RouterModule,
    ]
})
export class PagesModule {}