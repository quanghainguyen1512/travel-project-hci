import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesModule} from '../pages.module';
import {PlacesComponent} from './places.component';
import {RatingSumaryModule} from 'src/app/template/rating-sumary/rating-sumary.module';
import {ModalImageModule} from 'src/app/template/modal-image/modal-image.module';
import {CommentModule} from 'src/app/template/comment/comment.module';

// import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations: [PlacesComponent],
    imports: [
        CommonModule, PagesModule, RatingSumaryModule, ModalImageModule, CommentModule
    ],
    exports: [PlacesComponent]
})
export class PlacesModule {}