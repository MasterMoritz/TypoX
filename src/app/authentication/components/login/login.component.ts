import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Login } from '../../store/auth.actions';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(public authService: AuthService, private formBuilder: FormBuilder, private router: Router, private store: Store) {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  tryLogin(value) {
    this.store.dispatch(new Login(value.email, value.password)).pipe(take(1)).subscribe(
      success => {
      },
      error => {
        this.errorMessage = error.message;
      });
  }

}
