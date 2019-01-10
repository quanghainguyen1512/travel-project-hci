import {Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { RATING } from 'src/app/mock-data/rating';
import { COMMENT, PROFILE_REVIEW, IMAGES_FOR_ARTICLE, RELATIVE_ARTICLE } from 'src/app/mock-data/review-detail';

@Component({selector: 'app-review', templateUrl: './review.component.html', styleUrls: ['./review.component.scss']})
export class ReviewComponent implements OnInit, AfterViewInit {

    private screenHeight = 0;
    public relativePostHeight = 0;
    public imageHeight = 0;
    imgSrc = '';

    public imgForArticle = IMAGES_FOR_ARTICLE;
    public relativeArticles = RELATIVE_ARTICLE;
    public comments = COMMENT;
    public rating = RATING;

    public profileReviewReview = PROFILE_REVIEW;

    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        this.resize();
    }

    constructor() {
        this.onResize();
        this.imgSrc = this.imgForArticle[0].img;
    }

    private resize() {
        this.screenHeight = window.innerHeight;
        this.relativePostHeight = this.screenHeight / 2.61;
        this.imageHeight = this.screenHeight - this.relativePostHeight;

        if(document.getElementById('relativePost')) {
            document.getElementById('relativePost').style.height = this.relativePostHeight + 'px';
        }

        if(document.getElementById('image')) {
            document.getElementById('image').style.height = this.imageHeight + 'px';
        }
    }

    ngOnInit() {}
    
    ngAfterViewInit() {
        this.resize();
        let top = document.getElementById('top');
        if(top) {
            top.scrollIntoView();
        }

        const dateInput = <HTMLInputElement>document.getElementById('dateVisited');
        dateInput.value = this.formatDate(new Date());
    }

    private formatDate(date: Date): string {
        let format = '';
        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        format = monthNames[monthIndex] + ' ' + day + ', ' + year;

        return format;
    }


    onSubmit() {
        console.log('submit');
    }

    showImage(id: string) {
        this.imgSrc = this.imgForArticle[+id-1].img;
    }
}
