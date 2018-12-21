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
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

  scroll(el) {
    el.scrollIntoView({behavior:"smooth"});
  }

  onPageChangedArticle(e) {
    // let firstCut = e.pageIndex * e.pageSize;
    // let secondCut = firstCut + e.pageSize;
    // this.listReview = this.reviewDetail.slice(firstCut, secondCut);
  }
}
