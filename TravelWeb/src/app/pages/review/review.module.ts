import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReviewComponent} from './review.component'
import {MatIconModule, MatBadgeModule} from '@angular/material';
import {ModalImageModule} from 'src/app/template/modal-image/modal-image.module';
import {RelativeArticleModule} from './../../template/relative-article/relative-article.module';
import {CommentModule} from 'src/app/template/comment/comment.module';
import { RatingSumaryModule } from 'src/app/template/rating-sumary/rating-sumary.module';

@NgModule({
    declarations: [ReviewComponent],
    imports: [
        CommonModule,
        MatIconModule,
        MatBadgeModule,
        ModalImageModule,
        RelativeArticleModule,
        CommentModule,
        RatingSumaryModule
    ],
    exports: [ReviewComponent]
})
export class ReviewModule {}