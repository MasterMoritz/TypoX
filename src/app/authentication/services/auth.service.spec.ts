import * as firebase from 'firebase';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Actions } from '@ngxs/store';
import { ToasterService } from 'angular2-toaster';
import { Observable, BehaviorSubject } from 'rxjs';


const credentialsMock = {
  email: 'abc@123.com',
  password: 'password'
};

const userMock = {
  uid: 'ABC123',
  email: credentialsMock.email,
};

const fakeAuthState = new BehaviorSubject(null); // <= Pay attention to this guy

const fakeSignInHandler = (email, password): Promise<any> => {
  fakeAuthState.next(userMock);
  return Promise.resolve(userMock);
};

const fakeSignOutHandler = (): Promise<any> => {
  fakeAuthState.next(null);
  return Promise.resolve();
};

const routerStub = {
  parseUrl: (path: string) => { },
  navigate: (path: string) => { },
};

const toasterStub = {
  pop: (type: string, title: string, body: string) => { }
};

const actionsTest = new Observable<any>();

const angularFireAuthStub = {
  authState: fakeAuthState,
  auth: {
    createUserWithEmailAndPassword: jasmine
      .createSpy('createUserWithEmailAndPassword')
      .and
      .callFake(fakeSignInHandler),
    signInWithEmailAndPassword: jasmine
      .createSpy('signInWithEmailAndPassword')
      .and
      .callFake(fakeSignInHandler),
    signOut: jasmine
      .createSpy('signOut')
      .and
      .callFake(fakeSignOutHandler),
  },
};

describe('Auth Service', () => {
  let service: AuthService;
  let afAuth: AngularFireAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: angularFireAuthStub },
        { provide: Router, useValue: routerStub },
        { provide: ToasterService, useValue: toasterStub },
        { provide: Actions, useValue: actionsTest },
      ],
    });

    service = TestBed.get(AuthService);
    afAuth = TestBed.get(AngularFireAuth);
    spyOn(firebase, "auth").and.returnValue(angularFireAuthStub.auth);
  });

  afterEach(() => {
    fakeAuthState.next(null);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Login', () => {
    it('should call the signInWithEmailAndPassword auth fire method with provided credentials when logging in with email and password', () => {
      service.loginWithEmail(credentialsMock.email, credentialsMock.password);

      expect(afAuth.auth.signInWithEmailAndPassword)
        .toHaveBeenCalledWith(credentialsMock.email, credentialsMock.password);
    });
  });
  describe('Register', () => {
    it('should call the createUserWithEmailAndPassword auth fire method with provided credentials when registering new user with email and password', () => {
      service.registerAndLogin(credentialsMock.email, credentialsMock.password);

      expect(afAuth.auth.createUserWithEmailAndPassword)
        .toHaveBeenCalledWith(credentialsMock.email, credentialsMock.password);
    });
  });
  describe('Logout', () => {
    it('should call the signOut auth fire method once when logging out ', () => {
      service.logout();

      expect(afAuth.auth.signOut)
        .toHaveBeenCalledTimes(1);
    });
  });
});