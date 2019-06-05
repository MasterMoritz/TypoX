import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private store: Store, private formBuilder: FormBuilder, private router: Router) { 
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    })
  }

  tryRegister(value){
    this.store.dispatch(new RegisterAndLogin(value.email, value.password)).pipe(take(1)).subscribe(
      success => {
        this.router.navigate(['']);
      },
      error => {
        this.errorMessage = error.message;
      });
  }
}
