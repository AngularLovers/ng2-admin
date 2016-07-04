import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {BaPageTop, BaContentTop, BaSidebar, BaBackTop} from '../theme/components';

import {Dashboard} from './dashboard';
import {Ui} from './ui';
import {Charts} from './charts';
import {Forms} from './forms';
import {Tables} from './tables';
import {Editors} from "./editors";

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  directives: [BaPageTop, BaSidebar, BaContentTop, BaBackTop],
  template: require('./pages.html')
})
@RouteConfig([
  {
    name: 'Editors',
    component: Editors,
    path: '/editors/...',
  },
  {
    name: 'Dashboard',
    component: Dashboard,
    path: '/dashboard',
    useAsDefault: true,
  },
  {
    name: 'Ui',
    component: Ui,
    path: '/ui/...',
  },
  {
    name: 'Charts',
    component: Charts,
    path: '/charts/...',
  },
  {
    name: 'Forms',
    component: Forms,
    path: '/forms/...',
  },
  {
    name: 'Tables',
    component: Tables,
    path: '/tables/...',
  }
])
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}
