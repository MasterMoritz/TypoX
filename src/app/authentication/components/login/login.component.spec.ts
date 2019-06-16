import {FormBuilder} from '@angular/forms';

import {LoginComponent} from './login.component';
import { Observable } from 'rxjs';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let formbuilder: FormBuilder;

  let store;

  const credentialsStub = {
    email: 'a@b.c',
    password: '123'
  };

  beforeEach(() => {
    
    store = jasmine.createSpyObj('Store', ['dispatch']);
    formbuilder = jasmine.createSpyObj('FormBuilder', ['group']);
    formbuilder.group({
      email: ['test@test.de'],
      password: ['123456']
    });
    component = new LoginComponent(formbuilder, store);
  });

  it('dispatches the login action', () => {
    store.dispatch.and.returnValue(new Observable<any>(subscriber => {
      subscriber.next();
      subscriber.complete();
    }))
    component.tryLogin(credentialsStub);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('uses the error message in case of failed login', () => {

    const errorStub = {
      message: "no such email found"
    };
    store.dispatch.and.returnValue(new Observable<any>(subscriber => {
      subscriber.error(errorStub);
    }));

    component.tryLogin(credentialsStub);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(component.errorMessage).toEqual("no such email found");
  });
});
