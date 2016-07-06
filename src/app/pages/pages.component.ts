import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

import { BaPageTop, BaContentTop, BaSidebar, BaBackTop } from '../theme/components';

import { Dashboard } from './dashboard';
import { Ui } from './demo/ui';
import { Forms } from './demo/forms';
import { Tables } from './demo/tables';
import { Editors } from "./demo/editors";

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  directives: [BaPageTop, BaSidebar, BaContentTop, BaBackTop],
  template: require('./pages.html')
})
@RouteConfig([
  {
    name: 'Dashboard',
    component: Dashboard,
    path: '/dashboard',
    useAsDefault: true,
  },
  {
    name: 'Editors',
    component: Editors,
    path: '/editors/...',
  },
  {
    name: 'Ui',
    component: Ui,
    path: '/ui/...',
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
