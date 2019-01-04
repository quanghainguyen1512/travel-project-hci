import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';

export interface Article {
  image: string;
  title: string;
  author: string;
  content: string;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  // private carouselToken: string;
 
  // public carouselTileItems: Array<any>;
  // public carouselTile: NguCarouselConfig;
  // @ViewChild('carousel') carousel: NguCarousel<any>;

  listArticle : Article = 
    {
      image: 'assets/image.jpg',
      title: 'Hồ Con Rùa',
      author: 'Johnny',
      content: 'Ròng rã suốt 3 thế kỷ từ thời Pháp thuộc, trước và sau 1975, địa danh Hồ con Rùa được xem là một công trình văn hóa...'
    };

  // MatPaginator Inputs
  length = 4;
  pageSize = 2;
  // MatPaginator Output
  pageEvent: PageEvent;

  constructor() { }

  ngOnInit() {
    // this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
 
    // this.carouselTile = {
    //   grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
    //   slide: 2,
    //   speed: 400,
    //   animation: 'lazy',
    //   point: {
    //     visible: true
    //   },
    //   load: 2,
    //   touch: true,
    //   easing: 'ease'
    // }
  }

  scroll(el) {
    el.scrollIntoView({behavior:"smooth"});
  }

  onPageChangedArticle(e) {
    // let firstCut = e.pageIndex * e.pageSize;
    // let secondCut = firstCut + e.pageSize;
    // this.listReview = this.reviewDetail.slice(firstCut, secondCut);
  }

  // initDataFn(key: NguCarouselStore) {
  //   this.carouselToken = key.token;
  // }
 
  // resetFn() {
  //   this.carousel.reset(this.carouselToken);
  // }
 
  // moveToSlide() {
  //   this.carousel.moveToSlide(this.carouselToken, 2, false);
  // }
 
  // public carouselTileLoad(evt: any) {
 
  //   const len = this.carouselTileItems.length
  //   if (len <= 30) {
  //     for (let i = len; i < len + 10; i++) {
  //       this.carouselTileItems.push(i);
  //     }
  //   }
  // }
}
