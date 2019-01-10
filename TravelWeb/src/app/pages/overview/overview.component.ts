import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

import {NEARBY_CITIES} from 'src/app/mock-data/nearby-cities';
import {POPULAR_PLACES} from 'src/app/mock-data/popular-places';
import {Router} from '@angular/router';
import {IMAGES_DESTINATION} from 'src/app/mock-data/destination-detail';
import {ROUTING, RELATED_ARTICLES_DESTINATION, SIGHTSEEING, MUST_EAT, RELAX} from 'src/app/mock-data/overview-detail';

declare var ol : any;

export interface Article {
    image : string;
    title : string;
    author : string;
    content : string;
}

@Component({selector: 'app-overview', templateUrl: './overview.component.html', styleUrls: ['./overview.component.scss']})
export class OverviewComponent implements OnInit,
AfterViewInit {
    @ViewChild("main")MyProp : ElementRef;

    public imgForDestination = IMAGES_DESTINATION;
    public imgSrc = '';
    public nearbyCitites = [];
    public places = POPULAR_PLACES;

    map : any;

    public routing = ROUTING;
    public relatedArticlesDestination = RELATED_ARTICLES_DESTINATION;
    public listSightseeing = SIGHTSEEING;
    public listMustEat = MUST_EAT;
    public listRelax = RELAX;

    constructor(private router : Router) {
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
        if (top) {
            top.scrollIntoView();
        }
    }

    scroll(tag, id) {
        console.log('id: ', id);
        let temp = document.getElementById(tag);
        if (temp) {
            temp.scrollIntoView({behavior: "smooth"});
        }

        this
            .routing
            .forEach((value, index, array) => {
                if (value.id === id) {
                    this.routing[index].clicked = true;
                } else {
                    this.routing[index].clicked = false;
                }
            });
    }

    showImage(id : string) {
        this.imgSrc = this.imgForDestination[+ id - 1].img;
    }

    navigateToPlaces() {
        this
            .router
            .navigateByUrl('/pages/places');
    }

    navigateToReview() {
        this
            .router
            .navigateByUrl('/pages/article');
    }
}
