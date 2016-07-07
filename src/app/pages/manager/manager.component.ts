import {Component, OnInit} from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

import { AdminsComponent } from './index';

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
])

export class Managers implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }


}
