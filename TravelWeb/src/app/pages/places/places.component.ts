import { Component, OnInit, AfterViewInit } from '@angular/core';
import {RATING} from 'src/app/mock-data/rating';
import {IMGAGES_PLACE} from 'src/app/mock-data/img-places';
import {ABOUT_BITEXCO, GALLERY_PLACES, RELATED_ARTICLES_PLACES, COMMENT, RELATED_PLACES, SERVICES} from 'src/app/mock-data/place-detail';
declare var ol : any;

@Component({selector: 'app-places', templateUrl: './places.component.html', styleUrls: ['./places.component.scss']})
export class PlacesComponent implements OnInit, AfterViewInit {

    public rating = RATING;
    public imgPlace = IMGAGES_PLACE;
    public srcImg = '';

    public aboutBitexco = ABOUT_BITEXCO;

    public galleryPlaces = GALLERY_PLACES;
    public galleryImage = '';

    public relatedArticlesPlace = RELATED_ARTICLES_PLACES;

    public comments = COMMENT;

    public relatedPlaces = RELATED_PLACES;

    public listServices = SERVICES;

    map : any;

    constructor() {
        this.srcImg = this.imgPlace[0].img;
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

    changeImage(id : string) {
        this.srcImg = this.imgPlace[+ id].img;
    }

    showImage(id : string) {
        this.galleryImage = this.galleryPlaces[+ id - 1].img;
    }

    onSubmit() {
        console.log('submit');
	}
	
	scroll(el) {
		el.scrollIntoView({behavior: "smooth"});
	}
}