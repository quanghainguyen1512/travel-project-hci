import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';
import { Observable } from 'rxjs';

export interface ReviewDetail {
  avatar: string;
  title: string;
  vote: number;
  downVote: number;
  comment: string;
}

export interface Article {
  image: string;
  title: string;
  author: string;
  content: string;
}

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  reviewDetail: ReviewDetail[] = [
    {
      avatar: 'assets/avatar.png',
      title: 'Bitexco Building',
      vote: 1,
      downVote:1,
      comment: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla n;a bla bla bla',
    },
    {
      avatar: 'assets/avatar.png',
      title: 'Bitexco! Hello Viet Nam',
      vote: 1,
      downVote:1,
      comment: 'hellooooooooooooooooo00000000000000000000000000000000000000000',
    },
    {
      avatar: 'assets/avatar.png',
      title: 'Toa nha cao thu nhi Tp HCM - Bitexco',
      vote: 1,
      downVote:1,
      comment: 'xin chao xin chao ',
    },
    {
      avatar: 'assets/avatar.png',
      title: 'Bitexco',
      vote: 1,
      downVote:1,
      comment: 'good job',
    },
  ];
  listReview: ReviewDetail[];

  listArticle : Article = 
    {
      image: 'assets/image.jpg',
      title: 'Hồ Con Rùa',
      author: 'Johnny',
      content: 'Ròng rã suốt 3 thế kỷ từ thời Pháp thuộc, trước và sau 1975, địa danh Hồ con Rùa được xem là một công trình văn hóa, lịch sử đã từng chứng kiến vô số sự kiện sôi nổi của lịch sử nước ta. Vào năm 1878 ngay tại khoảnh đất rộng bao la này, người Pháp đã cho xây một tháp nước khá kiên cố có tên là Công trường Tháp nước, sau đó đến...'
    };
  
  // MatPaginator Inputs
  length = 4;
  pageSize = 2;
  // MatPaginator Output
  pageEvent: PageEvent;
  
  constructor() { 
    this.listReview = this.reviewDetail.slice(0,this.pageSize);
  }

  ngOnInit() {  }

  scroll(el) {
    el.scrollIntoView({behavior:"smooth"});
  }

  onPageChangedReview(e) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.listReview = this.reviewDetail.slice(firstCut, secondCut);
  }

  onPageChangedArticle(e) {
    // let firstCut = e.pageIndex * e.pageSize;
    // let secondCut = firstCut + e.pageSize;
    // this.listReview = this.reviewDetail.slice(firstCut, secondCut);
  }
}
