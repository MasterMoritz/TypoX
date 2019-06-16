import { Pipe, PipeTransform } from '@angular/core';
import { TranslatorService } from '../services/translator.service';

@Pipe({
  name: 'tex'
})
export class TexPipe implements PipeTransform {

  constructor(private translator: TranslatorService) {}

  transform(asciiMathEquation: string): string {
    return this.translator.parse(asciiMathEquation);
  }

}
