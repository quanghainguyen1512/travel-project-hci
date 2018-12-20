import {NgModule} from '@angular/core';

import {
  MatTabsModule, 
  MatPaginatorModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule,
    MatPaginatorModule,
  ],
  exports: [
    MatTabsModule,
    MatPaginatorModule,
  ]
})
export class MaterialModule {}