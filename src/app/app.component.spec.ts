import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgModule} from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SymbolbarComponent } from './symbolbar/symbolbar.component';
import { SymbolComponent } from './symbol/symbol.component';
import { ToastComponent } from 'angular2-toaster';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authentication/guards/auth.guard';
import { APP_BASE_HREF } from '@angular/common';
import { MainComponent } from './equation/components/main/main.component';


describe('AppComponent', () => {

  const routes: Routes = [
    {path: '', component: MainComponent, canActivate: [AuthGuard]},
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes)
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        ToastComponent,
        SymbolbarComponent,
        SymbolComponent,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TypoX'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('TypoX');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Login');
  });
});
