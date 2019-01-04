import {Component, OnInit, Input} from '@angular/core';

@Component({selector: 'app-header-transparent', templateUrl: './header-transparent.component.html', styleUrls: ['./header-transparent.component.scss']})
export class HeaderTransparentComponent implements OnInit {

	@Input()
	img: '';

    constructor() {}

    ngOnInit() {}

}
