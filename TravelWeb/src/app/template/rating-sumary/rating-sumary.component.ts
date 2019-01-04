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

    public mainRating = [];
    public flagDecimal = false;

    constructor() {}

    ngOnInit() {}

    ngOnChanges(changes : SimpleChanges) {
        const rating : SimpleChange = changes.rating;

        const currentRating = rating.currentValue;

        if (currentRating != null) {
            this.totalRatings = +currentRating.five + + currentRating.four + + currentRating.three + + currentRating.two + + currentRating.one + '';

            this.five = +currentRating.five / + this.totalRatings * 100 + '';
            this.four = +currentRating.four / + this.totalRatings * 100 + '';
            this.three = +currentRating.three / + this.totalRatings * 100 + '';
            this.two = +currentRating.two / + this.totalRatings * 100 + '';
            this.one = +currentRating.one / + this.totalRatings * 100 + '';

            const temp = (+ currentRating.five * 5 + + currentRating.four * 4 + + currentRating.three * 3 + + currentRating.two * 2 + + currentRating.one) / + this.totalRatings;
            this.percentage = (Math.round(temp * 10) / 10) + '';

            for (let i = 0; i < Math.floor(+ this.percentage); i++) {
                this
                    .mainRating
                    .push(i);
            }

            if(+this.percentage - Math.floor(+this.percentage) > 0){
                this.flagDecimal = true;
            }else{
                this.flagDecimal = false;
            }

        }

    }
}
