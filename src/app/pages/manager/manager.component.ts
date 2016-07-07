import {Component, OnInit} from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

import { AdminsComponent ,MenusComponent } from './index';

@Component({
  moduleId: module.id,
  selector: 'managers',
  template:'<router-outlet></router-outlet>'
})

@RouteConfig([
  {
    name: 'Admins',
    component: AdminsComponent,
    path: '/admins',
    useAsDefault: true
  },
  {
    name: 'Menus',
    component: MenusComponent,
    path: '/menus',
  }
])

export class Managers implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }


}
