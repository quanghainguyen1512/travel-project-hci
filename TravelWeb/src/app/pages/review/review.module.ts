import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewComponent } from './review.component'
import { MatIconModule, MatBadgeModule } from '@angular/material';
import { ModalImageModule } from '../modal-image/modal-image.module';

@NgModule({
  declarations: [ReviewComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    ModalImageModule
  ],
  exports: [
    ReviewComponent
  ]
})
export class ReviewModule { }
