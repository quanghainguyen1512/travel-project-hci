import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  collection = [];
  p: number = 1;
  
  constructor() {  }

  ngOnInit() { 
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }

  scroll(el) {
    el.scrollIntoView({behavior:"smooth"});
  }

}
