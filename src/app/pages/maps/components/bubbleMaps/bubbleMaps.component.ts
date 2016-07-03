import {Component, ViewEncapsulation} from '@angular/core';
import {BaCard} from '../../../../theme/components';

import {BubbleMapsService} from "./bubbleMaps.service";

@Component({
  selector: 'bubble-maps',
  pipes: [],
  providers: [BubbleMapsService],
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard],
  styles: [require('./bubbleMaps.scss')],
  template: require('./bubbleMaps.html'),
})
export class BubbleMaps {

  chartData:Object;

  constructor(private _bubbleMapsService:BubbleMapsService) {
  }

  ngOnInit() {
    this.chartData = this._bubbleMapsService.getData();
  }
}
