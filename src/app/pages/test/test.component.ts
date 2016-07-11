import {Component, OnInit} from '@angular/core';

import { ConcatComponent } from './index';
import { CommonModalComponent } from './../../theme/components/index';

@Component({
  moduleId: module.id,
  selector: 'test',
  directives:[ConcatComponent,CommonModalComponent],
  template: require( './test.html')
})
export class Test implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }


}
