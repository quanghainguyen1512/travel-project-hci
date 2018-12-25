import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  numOfFollower: number = 89;
  isFollow: boolean = false;

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
