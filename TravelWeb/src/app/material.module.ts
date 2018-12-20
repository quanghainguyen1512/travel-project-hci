import {NgModule} from '@angular/core';

import {
  MatTabsModule, 
  MatPaginatorModule,
  MatFormFieldModule,
  MatAutocompleteModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatAutocompleteModule,
  ],
  exports: [
    MatTabsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatAutocompleteModule,
  ]
})
export class MaterialModule {}