import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { Statement } from '@angular/compiler';
import { EquationState } from '../../store/equation.state';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-latex-translation',
  templateUrl: './latex-translation.component.html',
  styleUrls: ['./latex-translation.component.scss']
})
export class LatexTranslationComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject();

  inputEquation: Observable<string>;
  
  constructor(private store: Store) {
    this.inputEquation = this.store.select(state => state.equation.asciiMathEquation);
  }

  ngOnInit() {
    //this.inputEquation.pipe(takeUntil(this.unsubscribe)).subscribe(val => console.log('input equation: ' + val));
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
