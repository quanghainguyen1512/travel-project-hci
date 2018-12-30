import {Component, OnInit, HostListener, AfterViewInit } from '@angular/core';

@Component({selector: 'app-review', templateUrl: './review.component.html', styleUrls: ['./review.component.scss']})
export class ReviewComponent implements OnInit, AfterViewInit {

    private screenHeight = 0;
    public relativePostHeight = 0;
    public imageHeight = 0;
    imgSrc = '';

    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        this.resize();
    }

    constructor() {
        this.onResize();
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
    }

    onSubmit() {
        console.log('submit');
    }
}
