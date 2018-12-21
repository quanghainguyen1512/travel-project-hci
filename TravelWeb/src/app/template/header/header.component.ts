import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface DialogData {
  animal: string;
  name: string;
}

export interface State {
  flag: string;
  name: string;
  capital: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  noti : number = 0;

  resultFromDialog: string;
  isSignIn: boolean;

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

  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  constructor(public dialog: MatDialog) {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }

  ngOnInit() {
  }

  public showSignIn() {
    const dialogRef = this.dialog.open(SignInComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.isSignIn = result;
    });
  }

  public showSignOut() {
    const dialogRef = this.dialog.open(SignOutComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.isSignIn = result;
    });
  }

  public openNewsFeed() {
    const dialogRef = this.dialog.open(NewsFeedComponent, {
      height: '75%'
    });
  }
}

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.css']
})
export class SignInComponent {

  constructor(
    public dialogRef: MatDialogRef<SignInComponent>,
    @Inject(MAT_DIALOG_DATA) public isSignIn: boolean) {}
}

@Component({
  selector: 'sign-out',
  templateUrl: './sign-out.html',
  styleUrls: ['./sign-out.css']
})
export class SignOutComponent {

  constructor(
    public dialogRef: MatDialogRef<SignOutComponent>,
    @Inject(MAT_DIALOG_DATA) public isSignIn: boolean) {}
}

@Component({
  selector: 'news-feed',
  templateUrl: './news-feed.html',
  styleUrls: ['./news-feed.css']
})
export class NewsFeedComponent {

  constructor(
    public dialogRef: MatDialogRef<NewsFeedComponent>,
    @Inject(MAT_DIALOG_DATA) public isSignIn: boolean) {}
}
