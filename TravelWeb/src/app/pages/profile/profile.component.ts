import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  numOfFollower: number = 89;
  isFollow: boolean = false;

  name = 'Johnny';
  numOfPost = 'Number of posts: ';
  follower = 'Follower: ';
  following = 'Following: ';
  btnFollow = '+ Follow';
  btnUnfollow = '- Unfollow';
  joined = 'Joined: ';
  joinTime = 'March 14 2012';
  describe = 'A personal diary of all the adventures in the rockies and travels to explore new sights.';
  title = 'Hồ Con Rùa';
  overviewArticle = 'Ròng rã suốt 3 thế kỷ từ thời Pháp thuộc, trước và sau 1975, địa danh Hồ con Rùa được xem là một công trình văn hóa, lịch sử đã từng chứng kiến vô số sự kiện sôi nổi của lịch sử nước ta...';
  

  constructor() { }

  ngOnInit() {
  }

  follow() {
    this.numOfFollower+=1;
    this.isFollow = true;
  }

  unfollow() {
    this.numOfFollower-=1;
    this.isFollow = false;
  }

}
