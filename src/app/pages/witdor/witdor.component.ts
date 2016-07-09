import {Component, OnInit} from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

import { IndexComponent,MenuComponent } from './index';

@Component({
  moduleId: module.id,
  selector: 'witdors',
  template:`<router-outlet></router-outlet>`
})

@RouteConfig([
  {
    name: 'Indexes',
    component: IndexComponent,
    path: '/indexes',
    useAsDefault: true
  },
  {
    name: 'WitdorMenus',
    component: MenuComponent,
    path: '/witdorMenus',
  }
])



export class Witdors implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }


}
