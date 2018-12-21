import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
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

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public showSignIn() {
    const dialogRef = this.dialog.open(SignInComponent, {
      // signInAction = false;
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.isSignIn = result;
    });
  }

  public showSignOut() {
    const dialogRef = this.dialog.open(SignOutComponent, {
      // signInAction = false;
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.isSignIn = result;
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
