import { Component } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

import {Typography ,Icons ,Grid,Buttons ,Inputs,Layouts,BasicTables,Ckeditor } from './index';
import { Login } from './../manager/index';

@Component({
  selector: 'demos',
  template:`<router-outlet></router-outlet>`
})

@RouteConfig([
  {
    name: 'Ckeditor',
    component: Ckeditor,
    path: '/ckeditor',
    useAsDefault: true
  },
  {
    name: 'Typography',
    component: Typography,
    path: '/typography',
  },
  {
    name: 'Buttons',
    component: Buttons,
    path: '/buttons',
  },
  {
    name: 'Icons',
    component: Icons,
    path: '/icons',
  },
  {
    name: 'Grid',
    component: Grid,
    path: '/grid',
  },

  {
    name: 'Inputs',
    component: Inputs,
    path: '/inputs',
  },
  {
    name: 'Layouts',
    component: Layouts,
    path: '/layouts',
  },
  {
    name: 'BasicTables',
    component: BasicTables,
    path: '/basic',
  },
  {
    name: 'Login',
    component: Login,
    path: '/login',
  }
])
export class Demos {
  constructor() {
  }
}
