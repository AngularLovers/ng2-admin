import {Component, OnInit} from '@angular/core';

import { MenusComponent,MenusService } from './menus/index';

@Component({
  moduleId: module.id,
  selector: 'menu',
  directives:[MenusComponent],
  providers:[MenusService],
  template: require('./menu.html')
})
export class MenuComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }


}
