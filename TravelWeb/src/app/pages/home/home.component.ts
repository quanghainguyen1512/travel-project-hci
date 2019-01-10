import {Component, OnInit, AfterViewInit} from '@angular/core';

import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {EXPLORE_1, EXPLORE_2, EXPLORE_3, EXPLORE_4} from 'src/app/mock-data/home-detail';
import {Router} from '@angular/router';

export interface State {
    flag : string;
    name : string;
    capital : string;
}

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']})
export class HomeComponent implements OnInit,
AfterViewInit {

    slogan : string = 'Explore';

    title : string = 'Best new attractions for you in 2019';

    stateCtrl = new FormControl();
    filteredStates : Observable < State[] >;

    public explore1 = EXPLORE_1;
    public explore2 = EXPLORE_2;
    public explore3 = EXPLORE_3;
    public explore4 = EXPLORE_4;

    states : State[] = [
        {
            name: 'Vietnam',
            capital: 'Hanoi',
            flag: 'assets/VietnamFlag.png'
        }, {
            name: 'Thailand',
            capital: 'Bangkok',
            flag: 'assets/ThailandFlag.png'
        }, {
            name: 'Singapore',
            capital: 'Singapore',
            flag: 'assets/SingaporeFlag.png'
        }, {
            name: 'Laos',
            capital: 'Vientiane',
            flag: 'assets/LaosFlag.png'
        }
    ];

    constructor(private router : Router) {
        this.filteredStates = this
            .stateCtrl
            .valueChanges
            .pipe(startWith(''), map(state => state
                ? this._filterStates(state)
                : this.states.slice()));
    }

    private _filterStates(value : string) : State[] {
        const filterValue = value.toLowerCase();

        return this
            .states
            .filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
    }

    ngOnInit() {}

    ngAfterViewInit() {
        let top = document.getElementById('top');
        if (top) {
            top.scrollIntoView();
        }
    }

    navigateToPlace() {
        this
            .router
            .navigateByUrl('/pages/places');
    }

    navigateToCity() {
        this
            .router
			.navigateByUrl('/pages/country');
    }
}
