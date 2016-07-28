import {Component, OnInit} from '@angular/core';

import { CommonPaginationComponent } from './../../theme/components/index';

@Component({
  moduleId: module.id,
  selector: 'test',
  directives:[CommonPaginationComponent],
  template: require( './test.html'),
  styles: [require( './test.scss')]
})
export class Test implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }


}
