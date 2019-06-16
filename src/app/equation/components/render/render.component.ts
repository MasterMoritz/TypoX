import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss']
})
export class RenderComponent implements OnInit {
  renderEquation: Observable<string>;
  
  constructor(private store: Store) {
    this.renderEquation = store.select(state => state.equation.texEquation);

   }

  ngOnInit() {
  }

}
