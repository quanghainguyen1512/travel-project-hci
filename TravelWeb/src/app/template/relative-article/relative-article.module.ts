import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelativeArticleComponent } from './relative-article.component';

@NgModule({
  declarations: [RelativeArticleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RelativeArticleComponent,
  ]
})
export class RelativeArticleModule { }
