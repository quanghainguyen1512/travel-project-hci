import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  follower: number = 89;
  isFollow: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  follow() {
    this.follower+=1;
    this.isFollow = true;
  }

  unfollow() {
    this.follower-=1;
    this.isFollow = false;
  }

}
