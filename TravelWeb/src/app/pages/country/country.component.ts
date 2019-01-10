import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { EXPLORE_1, EXPLORE_2, EXPLORE_3, EXPLORE_4 } from 'src/app/mock-data/city-detail';

@Component({selector: 'app-city', templateUrl: './country.component.html', styleUrls: ['./country.component.scss']})
export class CityComponent implements OnInit, AfterViewInit {


    title : string = 'Best new attractions for you in 2019';

	public explore1 = EXPLORE_1;
	public explore2 = EXPLORE_2;
	public explore3 = EXPLORE_3;
	public explore4 = EXPLORE_4;

    constructor(private router : Router) {
	}

	ngOnInit() {}
	
    ngAfterViewInit() {
        let top = document.getElementById('top');
        if (top) {
            top.scrollIntoView();
        }
    }

	navigateToOverview() {
		this.router.navigateByUrl('/pages/overview');
	}
}
