import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import {IMAGES_DESTINATION} from 'src/app/mock-data/img-destination';
import {NEARBY_CITIES} from 'src/app/mock-data/nearby-cities';
import {POPULAR_PLACES} from 'src/app/mock-data/popular-places';
import { Router } from '@angular/router';

declare var ol : any;

export interface Article {
    image : string;
    title : string;
    author : string;
    content : string;
}

@Component({selector: 'app-overview', templateUrl: './overview.component.html', styleUrls: ['./overview.component.scss']})
export class OverviewComponent implements OnInit, AfterViewInit {
	@ViewChild("main") MyProp: ElementRef;
	
    public imgForDestination = [];
    public imgSrc = '';
    public nearbyCitites = [];
    public places = POPULAR_PLACES;

    map : any;

    constructor(private router: Router) {
        this.imgForDestination = IMAGES_DESTINATION;
		this.nearbyCitites = NEARBY_CITIES;
		
    }

    ngOnInit() {

        this.map = new ol.Map({
            target: 'map',
            layers: [
                new ol
                    .layer
                    .Tile({
                        source: new ol
                            .source
                            .OSM()
                    })
            ],
            view: new ol.View({
                center: ol
                    .proj
                    .fromLonLat([10.771935, 18.5204]),
                zoom: 8
            })
        });
    }

    ngAfterViewInit() {
        let top = document.getElementById('top');
        if(top) {
            top.scrollIntoView();
        }
    }

    scroll(el) {
        el.scrollIntoView({behavior: "smooth"});
    }


    showImage(id : string) {
        this.imgSrc = this.imgForDestination[+ id - 1].img;
	}
	
	navigateToPlaces() {
		this.router.navigateByUrl('/pages/places');
	}
}
