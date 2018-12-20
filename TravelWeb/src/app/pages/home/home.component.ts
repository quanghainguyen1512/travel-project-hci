import { Component, OnInit } from '@angular/core';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface State {
  flag: string;
  name: string;
  capital: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Vietnam',
      capital: 'Hanoi',
      flag: 'assets/VietnamFlag.png'
    },
    {
      name: 'Thailand',
      capital: 'Bangkok',
      flag: 'assets/ThailandFlag.png'
    },
    {
      name: 'Singapore',
      capital: 'Singapore',
      flag: 'assets/SingaporeFlag.png'
    },
    {
      name: 'Laos',
      capital: 'Vientiane',
      flag: 'assets/LaosFlag.png'
    }
  ];

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
   }

   private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
  }

}
