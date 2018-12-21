import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewComponent } from './overview.component';
import { MatTabsModule, MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatPaginatorModule,
  ],
  exports: [
    OverviewComponent,
    MatTabsModule,
    MatPaginatorModule,
  ]
})
export class OverviewModule { }
