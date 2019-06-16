import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { UpdateAsciiMathEquation } from '../../store/equation.actions';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {

  form: FormGroup;
  equation: string = '';
  
  private unsubscribe: Subject<void> = new Subject();
  private inputEquation: Observable<string>;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.inputEquation = this.store.select(state => state.equation.asciiMathEquation);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'equation': [''],
    });

    //if the equation gets modified from another source then we will update the input value
    this.inputEquation.pipe(takeUntil(this.unsubscribe)).subscribe(val => {
      if (this.form.controls['equation'].value !== val) {
        this.form.controls['equation'].setValue(val, {emitEvent: false});
      }
    })
    
    this.form.controls['equation'].valueChanges.pipe(takeUntil(this.unsubscribe))
    .subscribe(  
      (value: string) => { 
        console.log("patch value " + value);
        this.store.dispatch(new UpdateAsciiMathEquation(value));
      }
    );

  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
