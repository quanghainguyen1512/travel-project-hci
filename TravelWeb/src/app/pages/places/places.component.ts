import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  
  // MatPaginator Inputs
  length = 4;
  pageSize = 2;
  pageIndex = 0;
  // pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;
  
  constructor() {  }

  ngOnInit() { 
    
   }

  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  // }

  scroll(el) {
    el.scrollIntoView({behavior:"smooth"});
  }

}
