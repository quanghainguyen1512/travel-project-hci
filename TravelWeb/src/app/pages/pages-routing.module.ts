import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewComponent } from './review/review.component';
import { OverviewComponent } from './overview/overview.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    // { path: 'review', component: ReviewComponent },
    { path: '', component: ReviewComponent },
    { path: 'overview', component: OverviewComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }