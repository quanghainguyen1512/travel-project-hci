import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PROFILE_DETAIL, RELATED_ARTICLES_PLACES } from 'src/app/mock-data/profile-detail';


@Component({selector: 'app-profile', templateUrl: './profile.component.html', styleUrls: ['./profile.component.scss']})
export class ProfileComponent implements OnInit, AfterViewInit {

    numOfFollower : number = 89;
    isFollow : boolean = false;
    followText = 'Follow';

    follower = 0;
    
    public profileDetail = PROFILE_DETAIL;

    public profileArticles = RELATED_ARTICLES_PLACES;

    constructor() {
        this.follower = +this.profileDetail.followers;
    }

    ngOnInit() {}

    ngAfterViewInit() {
        let top = document.getElementById('top');
        if(top) {
            top.scrollIntoView();
        }
    }

    follow() {
		this.isFollow = !this.isFollow;
		this.followText = this.isFollow ? 'Unfollow' : 'Follow';
		
		if(this.isFollow) {
			this.follower += 1;
			this.followText = 'Unfollow';
		}else {
			this.follower -= 1;
			this.followText = 'Follow';
		}
    }

    unfollow() {
        this.numOfFollower -= 1;
        this.isFollow = false;
    }

}
