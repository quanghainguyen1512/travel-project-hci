import { Component, OnInit, Input, Inject, AfterViewInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {SignInComponent, SignOutComponent, NewsFeedComponent} from '../header/header.component';
import { DOCUMENT } from '@angular/platform-browser';
import { NOTIFICATIONS, FOLLOWING } from 'src/app/mock-data/header-detail';

export interface State {
    flag : string;
    name : string;
    capital : string;
}

@Component({selector: 'app-header-transparent', templateUrl: './header-transparent.component.html', styleUrls: ['./header-transparent.component.scss']})
export class HeaderTransparentComponent implements OnInit, OnChanges {

    @Input()
    flagAbsolute = '';

    public flag = false;

    public notificationsHeader = NOTIFICATIONS;

    public followingNotification = FOLLOWING;

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

    stateCtrl = new FormControl();
    filteredStates : Observable < State[] >;

    signin = 'Sign in';
    name = 'Johnny';
    profile = 'Profile';
    post = 'Post';
    signout = 'Sign out';

    noti : number = 0;

    resultFromDialog : string;
    isSignIn : boolean;

    constructor(public dialog : MatDialog, private router : Router, @Inject(DOCUMENT) private document: any) {
        this.filteredStates = this
            .stateCtrl
            .valueChanges
            .pipe(startWith(''), map(state => state
                ? this._filterStates(state)
                : this.states.slice()));

    }

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges) {
        const flagAbsolute: SimpleChange = changes.flagAbsolute;
        console.log('current value: ', flagAbsolute.currentValue);
        if(flagAbsolute.currentValue === 'true') {
            this.flag = true;
        }else {
            this.flag = false;
        }
    }

    private _filterStates(value : string) : State[] {
        const filterValue = value.toLowerCase();

        return this
            .states
            .filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
    }

    onKey(event) {
        if (event.key === 'Enter') {
            this
                .router
                .navigateByUrl('/pages/overview');
        }
    }

    public showSignIn() {
        const dialogRef = this
            .dialog
            .open(SignInComponent, {});

        dialogRef
            .afterClosed()
            .subscribe(result => {
                console.log('The dialog was closed');
                this.isSignIn = result;
            });
    }

    public showSignOut() {
        const dialogRef = this
            .dialog
            .open(SignOutComponent, {});

        dialogRef
            .afterClosed()
            .subscribe(result => {
                console.log('The dialog was closed');
                this.isSignIn = result;
            });
    }

    public openNewsFeed() {
        const dialogRef = this.dialog.open(NewsFeedComponent, {
          height: '75%'
        });
      }

    navigateToBooking() {
        this.document.location.href = 'https://www.booking.com/';
    }
}

// @Component({selector: 'sign-in', templateUrl: './sign-in.html', styleUrls:
// ['./sign-in.css']}) export class SignInComponent {     signup : string =
// 'Sign up';     signin1 : string = 'Sign in with';     signin2 : string =
// 'social network';     facebook : string = 'Log in with Facebook';     twitter
// : string = 'Log in with Twitter';     google : string = 'Log in with
// Google+';     or : string = 'OR';     constructor(public dialogRef :
// MatDialogRef < SignInComponent >, @Inject(MAT_DIALOG_DATA)public isSignIn :
// boolean) {} } @Component({selector: 'sign-out', templateUrl:
// './sign-out.html', styleUrls: ['./sign-out.css']}) export class
// SignOutComponent {     question : string = 'Do you want to sign out?';
// yes : string = 'OK';     no : string = "No Thanks";     constructor(public
// dialogRef : MatDialogRef < SignOutComponent >, @Inject(MAT_DIALOG_DATA)public
// isSignIn : boolean) {} }
