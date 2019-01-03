import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges,
    SimpleChange
} from '@angular/core';

@Component({selector: 'app-comment', templateUrl: './comment.component.html', styleUrls: ['./comment.component.scss']})
export class CommentComponent implements OnInit, OnChanges{

    @Input()
    comment: any;

    public like = '0';
    public dislike = '0';

    private flagLike = false;
    private flagDislike = false;

    private rating = [];
    private ratingDefault = [];

    constructor() {}

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges) {
        const comment: SimpleChange = changes.comment;

        if(comment.currentValue != null) {
            const currentComment = comment.currentValue;

            this.like = currentComment.like;
            this.dislike = currentComment.dislike;

            this.rating = [];
            this.ratingDefault = [];
            
            const rating = +currentComment.rating;

            for(let i = 0; i < rating; i++) {
                this.rating.push(i);
            }

            const ratingDefault = 5 - rating;
            for(let i=0; i < ratingDefault; i++) {
                this.ratingDefault.push(i);
            }
        }
    }

    likeComment(id: string) {

        if(this.flagLike){
            return;
        }

        if(this.flagDislike) {
            this.dislike = +this.dislike-1 + '';
        }

        this.like = +this.like + 1 + '';

        const thumpUp = document.getElementById('thump-up-' + id);
        thumpUp.style.color = 'blue';

        const thumpDown = document.getElementById('thump-down-' + id);
        thumpDown.style.color = 'black';

        this.flagLike = true;
        this.flagDislike = false;
    }

    dislikeComment(id: string) {

        if(this.flagDislike){
            return;
        }

        if(this.flagLike) {
            this.like = +this.like - 1 + '';
        }

        this.dislike = +this.dislike + 1 + '';

        const thumpUp = document.getElementById('thump-up-' + id);
        thumpUp.style.color = 'black';

        const thumpDown = document.getElementById('thump-down-' + id);
        thumpDown.style.color = 'blue';

        this.flagDislike = true;
        this.flagLike = false;

    }
}
