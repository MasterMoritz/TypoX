import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
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
  
  constructor(private formBuilder: FormBuilder, private store: Store) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'equation': [''],
    });
    this.form.controls['equation'].valueChanges.pipe(takeUntil(this.unsubscribe))
    .subscribe(  
      (value: string) => {  
        this.store.dispatch(new UpdateAsciiMathEquation(value));
      }
    );

  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
