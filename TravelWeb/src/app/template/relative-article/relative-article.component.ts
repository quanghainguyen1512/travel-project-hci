import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges,
    SimpleChange
} from '@angular/core';
import {formControlBinding} from '@angular/forms/src/directives/reactive_directives/form_control_directive';

@Component({selector: 'app-relative-article', templateUrl: './relative-article.component.html', styleUrls: ['./relative-article.component.scss']})
export class RelativeArticleComponent implements OnInit,
OnChanges {

    @Input()
    article : any;

    public ratingDefault = [];

    public rating = [];

    constructor() {}

    ngOnInit() {}

    ngOnChanges(changes : SimpleChanges) {
        const article : SimpleChange = changes.article;

        if(article.currentValue != null) {
            console.log(article.currentValue);

            this.rating = [];
            this.ratingDefault = [];

            const temp = article.currentValue;
            
            const rating = +temp.rating;
            console.log('rating: ', rating);

            for(let i = 0; i < rating; i++) {
                this.rating.push(i);
            }

            const ratingDefault = 5 - rating;
            for(let i=0; i < ratingDefault; i++) {
                this.ratingDefault.push(i);
            }
        }
    }
}
