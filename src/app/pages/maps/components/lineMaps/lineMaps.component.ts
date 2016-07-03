import {Component, ViewEncapsulation} from '@angular/core';
import {BaCard} from '../../../../theme/components';

import {LineMapsService} from './lineMaps.service';

@Component({
  selector: 'line-maps',
  pipes: [],
  providers: [LineMapsService],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./lineMaps.scss')],
  template: require('./lineMaps.html'),
  directives: [BaCard],
})
export class LineMaps {

  chartData:Object;

  constructor(private _lineMapsService:LineMapsService) {
    this.chartData = this._lineMapsService.getData();
  }
}
