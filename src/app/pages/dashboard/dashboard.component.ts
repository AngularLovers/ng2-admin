import {Component, ViewEncapsulation} from '@angular/core';

import {PieChart} from './pieChart';
import {TrafficChart} from './trafficChart';
import {Feed} from './feed';
import {Todo} from './todo';
import {Calendar} from './calendar';
import {BaCard} from '../../theme/components';

@Component({
  selector: 'dashboard',
  pipes: [],
  directives: [PieChart, TrafficChart, Feed, Todo, Calendar, BaCard],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {

  constructor() {
  }

}
