import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewComponent } from './overview.component';
import { MatTabsModule, MatPaginatorModule, MatGridListModule } from '@angular/material';
import { NguCarouselModule } from '@ngu/carousel';
import { TemplateModule } from 'src/app/template/template.module';
import { ModalImageModule } from 'src/app/template/modal-image/modal-image.module';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatPaginatorModule,
    NguCarouselModule,
    MatGridListModule,
    TemplateModule,
    ModalImageModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })
  ],
  exports: [
    OverviewComponent,
    MatTabsModule,
    MatPaginatorModule,
    NguCarouselModule,
    
  ]
})
export class OverviewModule { }
