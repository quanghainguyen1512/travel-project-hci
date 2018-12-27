import {Component, OnInit} from '@angular/core';
import { MatGridTileHeaderCssMatStyler } from '@angular/material';

@Component({selector: 'app-profile', templateUrl: './profile.component.html', styleUrls: ['./profile.component.scss']})
export class ProfileComponent implements OnInit {

    numOfFollower : number = 89;
    isFollow : boolean = false;
    followText = 'Follow';

	follower = 90;

    constructor() {}

    ngOnInit() {}

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
