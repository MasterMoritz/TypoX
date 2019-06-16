import { Injectable, OnInit, OnDestroy } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Subscription, Observable, of, from } from 'rxjs';
import { Actions, ofActionSuccessful } from '@ngxs/store';
import { Login, Logout, RegisterAndLogin } from '../store/auth.actions';
import { ToasterService } from 'angular2-toaster';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private toasterSub: Subscription;

  constructor(public afAuth: AngularFireAuth, private router: Router, private toaster: ToasterService, private actions$: Actions) {

    this.toasterSub =
      this.actions$
        .pipe(ofActionSuccessful(Login))
        .subscribe(() => {
          this.toaster.pop('success', 'You are now logged in!', '');
          this.router.navigate(['']);
        });

    this.toasterSub.add(this.actions$
      .pipe(ofActionSuccessful(Logout))
      .subscribe(() => {
        this.toaster.pop('success', 'You are now logged out!', '');
        this.router.navigate(['']);
      }));

      this.toasterSub.add(this.actions$
        .pipe(ofActionSuccessful(RegisterAndLogin))
        .subscribe(() => {
          this.toaster.pop('success', 'Account created', 'You are now logged in!');
          this.router.navigate(['']);
        }));
  }

  ngOnDestroy() {
    if (this.toasterSub) {
      this.toasterSub.unsubscribe();
    }
  }
  registerAndLogin(email: string, password: string) : Observable<firebase.auth.UserCredential>{
    return from(
      firebase.auth().createUserWithEmailAndPassword(email, password)
    );
  }

  loginWithEmail(email: string, password: string): Observable<firebase.auth.UserCredential> {
    return from(
      firebase.auth().signInWithEmailAndPassword(email, password)
    );
  }

  logout(): Observable<void> {
    return from(this.afAuth.auth.signOut());
  }

}


