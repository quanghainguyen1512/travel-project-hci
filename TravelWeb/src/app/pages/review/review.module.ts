import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewComponent } from './review.component'
import { MatIconModule, MatBadgeModule } from '@angular/material';

@NgModule({
  declarations: [ReviewComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
  ],
  exports: [
    ReviewComponent
  ]
})
export class ReviewModule { }
