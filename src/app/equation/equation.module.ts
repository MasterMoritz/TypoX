import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquationRoutingModule } from './equation-routing.module';
import { EditorComponent } from './components/editor/editor.component';
import { LatexTranslationComponent } from './components/latex-translation/latex-translation.component';
import { RenderComponent } from './components/render/render.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { EquationState } from './store/equation.state';
import {MathJaxModule} from 'ngx-mathjax';

@NgModule({
  declarations: [EditorComponent, LatexTranslationComponent, RenderComponent, MainComponent],
  imports: [
    CommonModule,
    EquationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MathJaxModule.config({
      version: '2.7.5',
      config: 'TeX-AMS_HTML',
      hostname: 'cdnjs.cloudflare.com'
    }),
    NgxsModule.forFeature([EquationState])
  ]
})
export class EquationModule { }
