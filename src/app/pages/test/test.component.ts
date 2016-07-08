import {Component, OnInit} from '@angular/core';

import { ConcatComponent } from './index';

@Component({
  moduleId: module.id,
  selector: 'test',
  directives:[ConcatComponent],
  template: require( './test.html')
})
export class Test implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }


}
