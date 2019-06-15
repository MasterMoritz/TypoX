import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquationRoutingModule } from './equation-routing.module';
import { EditorComponent } from './components/editor/editor.component';
import { LatexTranslationComponent } from './components/latex-translation/latex-translation.component';
import { RenderComponent } from './components/render/render.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditorComponent, LatexTranslationComponent, RenderComponent, MainComponent],
  imports: [
    CommonModule,
    EquationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EquationModule { }
