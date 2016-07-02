import { Component,ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import './app.loader.ts';
import {BaImageLoaderService, BaThemePreloader, BaThemeSpinner} from '../service/index.ts';

@Component({
    selector: 'taurus',
    encapsulation: ViewEncapsulation.None,
    styles: [require('normalize.css'), require('./app.scss')],
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [BaImageLoaderService,BaThemePreloader, BaThemeSpinner],
    template: require('./app.html')
})

export class AppComponent {
  constructor(private _spinner:BaThemeSpinner) {}

  public ngAfterViewInit():void {
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }
}
