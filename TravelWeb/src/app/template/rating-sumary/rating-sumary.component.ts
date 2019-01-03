import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges,
    SimpleChange
} from '@angular/core';

@Component({selector: 'app-rating-sumary', templateUrl: './rating-sumary.component.html', styleUrls: ['./rating-sumary.component.scss']})
export class RatingSumaryComponent implements OnInit,
OnChanges {

    @Input()
    rating : any;

    public five = '0';
    public four = '0';
    public three = '0';
    public two = '0';
    public one = '0';

    public totalRatings = '0';
    public percentage = '0';

    constructor() {}

    ngOnInit() {}

    ngOnChanges(changes : SimpleChanges) {
        const rating : SimpleChange = changes.rating;

        const currentRating = rating.currentValue;

        if (currentRating != null) {
            this.totalRatings = +currentRating.five + + currentRating.four + + currentRating.three + + currentRating.two + + currentRating.one + '';

            this.five = +currentRating.five / +this.totalRatings * 100 + '';
            this.four = +currentRating.four / +this.totalRatings * 100 + '';
            this.three = +currentRating.three / +this.totalRatings * 100 + '';
            this.two = +currentRating.two / +this.totalRatings * 100 + '';
            this.one = +currentRating.one / +this.totalRatings * 100 + '';
        }

    }
}
