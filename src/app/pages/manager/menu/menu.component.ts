import {Component, OnInit} from '@angular/core';

import { MenusComponent } from './index';

@Component({
  moduleId: module.id,
  selector: 'menus',
  directives:[MenusComponent],
  template: require('./menu.html')
})
export class MenuComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
