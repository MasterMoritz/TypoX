import { TestBed } from '@angular/core/testing';

import { TranslatorService } from './translator.service';

describe('TranslatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslatorService = TestBed.get(TranslatorService);
    expect(service).toBeTruthy();
  });

  describe('asciiMath to TeX translation', () => {

    it('sum_(i=1)^n i^3=((n(n+1))/2)^2', () => {
      const service: TranslatorService = TestBed.get(TranslatorService);
      expect(service.parse('sum_(i=1)^n i^3=((n(n+1))/2)^2')).toEqual('\\sum_{i = 1}^{n} i^{3} = \\left( \\frac{n \\left( n + 1 \\right )}{2} \\right )^{2}');
    });

    it('sqrt((a+b) / c)', () => {
      const service: TranslatorService = TestBed.get(TranslatorService);
      expect(service.parse('sqrt((a+b) / c)')).toEqual('\\sqrt{\\frac{a + b}{c}}');
    });
  })
  
});
