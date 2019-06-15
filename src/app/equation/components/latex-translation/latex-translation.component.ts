import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { takeUntil } from 'rxjs/operators';
import { TranslatorService } from '../../services/translator.service';
import { UpdateTexEquation } from '../../store/equation.actions';

@Component({
  selector: 'app-latex-translation',
  templateUrl: './latex-translation.component.html',
  styleUrls: ['./latex-translation.component.scss']
})
export class LatexTranslationComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject();

  inputEquation: Observable<string>;
  translatedEquation: Observable<string>;

  constructor(private store: Store, private translator: TranslatorService) {
    this.inputEquation = this.store.select(state => state.equation.asciiMathEquation);
    this.translatedEquation = this.store.select(state => state.equation.texEquation);
  }

  ngOnInit() {
    this.inputEquation.pipe(takeUntil(this.unsubscribe)).subscribe(val => this.store.dispatch(new UpdateTexEquation(this.translator.parse(val))));
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
