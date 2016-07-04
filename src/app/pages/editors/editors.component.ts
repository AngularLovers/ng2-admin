import { Component } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

import { Ckeditor } from "../../theme/components/common/editor/index";

@Component({
  selector: 'editors',
  template: require('./editors.html')
})

@RouteConfig([
  {
    name: 'Ckeditor',
    component: Ckeditor,
    path: '/ckeditor',
    useAsDefault: true
  }
])
export class Editors {
  constructor() {
  }
}
