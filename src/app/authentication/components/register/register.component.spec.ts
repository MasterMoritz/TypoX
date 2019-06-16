import { RegisterComponent } from './register.component';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
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
    component = new RegisterComponent(store, formbuilder);
  });

  it('dispatches the login action', () => {
    store.dispatch.and.returnValue(new Observable<any>(subscriber => {
      subscriber.next();
      subscriber.complete();
    }))
    component.tryRegister(credentialsStub);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('uses the error message in case of failed register', () => {

    const errorStub = {
      message: "bad mail format"
    };
    store.dispatch.and.returnValue(new Observable<any>(subscriber => {
      subscriber.error(errorStub);
    }));

    component.tryRegister(credentialsStub);
    expect(component.errorMessage).toEqual(errorStub.message);
  });
});
