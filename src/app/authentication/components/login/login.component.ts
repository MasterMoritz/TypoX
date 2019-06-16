import { Component } from '@angular/core';
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
  loading: boolean;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.initForm();
    this.loading = false;
  }

  initForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  tryLogin(value) {
    this.loading = true;
    this.store.dispatch(new Login(value.email, value.password)).pipe(take(1)).subscribe(
      success => {
        this.loading = false;
      },
      error => {
        this.errorMessage = error.message;
        this.loading = false;
      },
      () => {
        this.loading = false;
      });
  }

}
