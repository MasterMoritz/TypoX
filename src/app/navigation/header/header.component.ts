import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { Select, Store } from '@ngxs/store';
import { AuthState } from 'src/app/authentication/store/auth.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Select(AuthState.loggedIn) loggedIn$ : Observable<boolean>;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }



}
