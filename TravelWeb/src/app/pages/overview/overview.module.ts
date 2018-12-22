import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewComponent } from './overview.component';
import { MatTabsModule, MatPaginatorModule } from '@angular/material';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatPaginatorModule,
    NguCarouselModule
  ],
  exports: [
    OverviewComponent,
    MatTabsModule,
    MatPaginatorModule,
    NguCarouselModule,
  ]
})
export class OverviewModule { }
