import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [ReviewComponent, OverviewComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
