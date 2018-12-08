import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewComponent } from './review/review.component';
import { OverviewComponent } from './overview/overview.component';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { BookinghomeComponent } from './bookinghome/bookinghome.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    // { path: '', component: HomeComponent},
    { path: '', component: ReviewComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'bookinghome', component: BookinghomeComponent},
    { path: 'booking', component: BookingComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }