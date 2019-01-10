import {Component, OnInit, Input, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';
import { SignInComponent, SignOutComponent } from '../header/header.component';

export interface State {
    flag : string;
    name : string;
    capital : string;
}

@Component({selector: 'app-header-transparent', templateUrl: './header-transparent.component.html', styleUrls: ['./header-transparent.component.scss']})
export class HeaderTransparentComponent implements OnInit {

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

    constructor(public dialog : MatDialog, private router : Router) {
        this.filteredStates = this
            .stateCtrl
            .valueChanges
            .pipe(startWith(''), map(state => state
                ? this._filterStates(state)
                : this.states.slice()));

    }

    ngOnInit() {}

    private _filterStates(value : string) : State[] {
        const filterValue = value.toLowerCase();

        return this
            .states
            .filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
    }

    onKey(event) {
        this
            .router
            .navigateByUrl('/pages/overview');
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
}

// @Component({selector: 'sign-in', templateUrl: './sign-in.html', styleUrls: ['./sign-in.css']})
// export class SignInComponent {

//     signup : string = 'Sign up';
//     signin1 : string = 'Sign in with';
//     signin2 : string = 'social network';
//     facebook : string = 'Log in with Facebook';
//     twitter : string = 'Log in with Twitter';
//     google : string = 'Log in with Google+';
//     or : string = 'OR';

//     constructor(public dialogRef : MatDialogRef < SignInComponent >, @Inject(MAT_DIALOG_DATA)public isSignIn : boolean) {}
// }

// @Component({selector: 'sign-out', templateUrl: './sign-out.html', styleUrls: ['./sign-out.css']})
// export class SignOutComponent {

//     question : string = 'Do you want to sign out?';
//     yes : string = 'OK';
//     no : string = "No Thanks";

//     constructor(public dialogRef : MatDialogRef < SignOutComponent >, @Inject(MAT_DIALOG_DATA)public isSignIn : boolean) {}
// }

