import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import {Store} from '@ngxs/store';
import { debug } from 'util';
import { By, by } from 'protractor';
import { AuthState } from '../authentication/store/auth.state';
import { RouterTestingModule } from '@angular/router/testing';
import { store } from '@angular/core/src/render3';
import { of } from 'rxjs';


const matchObj = [
  { matchStr: '(min-width: 800px)', result: false },
  { matchStr: '(min-width: 1366px)', result: false },
  { matchStr: '(max-width: 1366px)', result: false }
];

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let storeService: Store;

  beforeEach(async(() => {
    storeService = jasmine.createSpyObj('Store', ['dispatch']);
    component = new NavbarComponent(storeService);

    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers: [{ provide: Store, useValue: storeService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;

    Object.defineProperty(component, 'loggedIn$', {writable: true});
    component.loggedIn$ = of(true);
    fixture.detectChanges();
  });

  it('should create navbar', () => {
    expect(component).toBeDefined();
  });


  function resize(width: number): void {
    matchObj[0].result = (width >= 800) ? true : false;
    matchObj[1].result = (width >= 1366) ? true : false;
    matchObj[2].result = (width <= 1366) ? true : false;
  }

  it('test if toggle NavBar function is called', async(() => {
    resize(380);
    spyOn(component, 'toggleNavbar');

    const button = fixture.debugElement.nativeElement.querySelector('#toggleBtn');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.toggleNavbar).toHaveBeenCalled();
    });
  }));
});


