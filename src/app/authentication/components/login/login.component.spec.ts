import {FormBuilder} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

import {LoginComponent} from './login.component';
import {Router} from '@angular/router';
import {Store} from '@ngxs/store';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let formbuilder: FormBuilder;
  let router: Router;
  let store: Store;
  let service: AuthService;
  let value: any;

  beforeEach(() => {
    service = jasmine.createSpyObj('authService', ['auth']);
    router = jasmine.createSpyObj('router', ['navigator']);
    store = jasmine.createSpyObj('Store', ['dispatch']);
    formbuilder = jasmine.createSpyObj('FormBuilder', ['group']);
    formbuilder.group({
      email: ['test@test.de'],
      password: ['123456']
    });
    value = {
      email: 'test@test.de',
      password: '123456'
    };
    component = new LoginComponent(service, formbuilder, router, store);
  });

  it('has the login function', () => {
    expect(component.tryLogin).toBeDefined();
  });



  afterEach(() => {
    service = null;
    component = null;
  });

});
