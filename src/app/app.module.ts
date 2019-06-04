import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './navigation/header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'; //always use as last plugin

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import {ToasterModule} from 'angular2-toaster';
import { from } from 'rxjs';

export const firebase = {
  apiKey: "AIzaSyD5kytDwmZmNqQosvsDgsWs_46l4sGYY5E",
  authDomain: "typox-3860f.firebaseapp.com",
  databaseURL: "https://typox-3860f.firebaseio.com",
  projectId: "typox-3860f",
  storageBucket: "typox-3860f.appspot.com",
  messagingSenderId: "432449450204",
  appId: "1:432449450204:web:558396ed1e89bcb0"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,

    BrowserAnimationsModule,

    NgxsModule.forRoot([
    ], {developmentMode: !environment.production}),
    NgxsStoragePluginModule.forRoot({
      key: ['auth.user']
    }),

    ToasterModule.forRoot(),

    NgxsReduxDevtoolsPluginModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
