import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentComponent} from './comment.component';
import {MatIconModule, MatBadgeModule} from '@angular/material';

@NgModule({
    declarations: [CommentComponent],
    imports: [
        CommonModule, MatIconModule, MatBadgeModule
    ],
    exports: [CommentComponent]
})
export class CommentModule {}