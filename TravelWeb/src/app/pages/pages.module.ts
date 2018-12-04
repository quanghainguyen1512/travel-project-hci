import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';

import { ReviewModule } from './review/review.module';
import { OverviewModule } from './overview/overview.module';

import { TemplateModule } from '../template/template.module';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReviewModule,
    OverviewModule, 
    TemplateModule
  ]
})
export class PagesModule { }
