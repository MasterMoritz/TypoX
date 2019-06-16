import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.scss']
})
export class SymbolComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  onClick(event: Event) {
    console.log('clicked!', event);
  }

  addSymbole(sign:string, latexCode:any){

  }


}
