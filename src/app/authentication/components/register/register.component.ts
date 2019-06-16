import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { RegisterAndLogin } from '../../store/auth.actions';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  loading: boolean;

  constructor(private store: Store, private formBuilder: FormBuilder) { 
    this.initForm();
    this.loading = false;
  }

  initForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    })
  }

  tryRegister(value){
    this.loading = true;

    this.store.dispatch(new RegisterAndLogin(value.email, value.password)).pipe(take(1)).subscribe(
      success => {
        this.loading = false;
      },
      error => {
        this.errorMessage = error.message;
        this.loading = false;
      },
      () => this.loading = false);
  }
}
