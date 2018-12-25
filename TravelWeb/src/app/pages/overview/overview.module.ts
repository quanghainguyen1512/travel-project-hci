import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewComponent } from './overview.component';
import { MatTabsModule, MatPaginatorModule, MatGridListModule } from '@angular/material';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatPaginatorModule,
    NguCarouselModule,
    MatGridListModule,
  ],
  exports: [
    OverviewComponent,
    MatTabsModule,
    MatPaginatorModule,
    NguCarouselModule,
  ]
})
export class OverviewModule { }
