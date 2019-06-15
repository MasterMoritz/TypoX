import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatexTranslationComponent } from './latex-translation.component';

describe('LatexTranslationComponent', () => {
  let component: LatexTranslationComponent;
  let fixture: ComponentFixture<LatexTranslationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatexTranslationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatexTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
