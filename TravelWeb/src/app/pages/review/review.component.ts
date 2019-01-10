import {Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { IMAGES_FOR_ARTICLE } from '../../mock-data/img-article';
import { RELATIVE_ARTICLE } from './../../mock-data/relative-article';
import { COMMENT } from './../../mock-data/comment';
import { RATING } from 'src/app/mock-data/rating';

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
            console.log(document.getElementById('relativePost').style.height);
        }

        if(document.getElementById('image')) {
            document.getElementById('image').style.height = this.imageHeight + 'px';
            console.log(document.getElementById('image').style.height);
        }
    }

    ngOnInit() {}
    
    ngAfterViewInit() {
        this.resize();
        let top = document.getElementById('top');
        if(top) {
            top.scrollIntoView();
        }
    }

    onSubmit() {
        console.log('submit');
    }

    showImage(id: string) {
        this.imgSrc = this.imgForArticle[+id-1].img;
    }
}
