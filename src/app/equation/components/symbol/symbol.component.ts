import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AddToAsciiMathEquation } from '../../store/equation.actions';

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.scss']
})
export class SymbolComponent implements OnInit {
  @Input() asciiMath: string;
  @Input() htmlCode: string;
  
  
  constructor(private store: Store) {
    
   }
  ngOnInit() {
  }

  updateEquation(event: Event) {
    this.store.dispatch(new AddToAsciiMathEquation(this.asciiMath));
  }
}
