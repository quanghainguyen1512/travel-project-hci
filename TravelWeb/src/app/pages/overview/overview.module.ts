import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewComponent } from './overview.component';
import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    MatTabsModule,
  ],
  exports: [
    OverviewComponent,
    MatTabsModule,
  ]
})
export class OverviewModule { }
