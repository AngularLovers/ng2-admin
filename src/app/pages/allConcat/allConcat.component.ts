import {Component, OnInit} from '@angular/core';

import { ConcatComponent } from './index';

@Component({
  moduleId: module.id,
  selector: 'all-concat',
  directives:[ConcatComponent],
  template: require( './allConcat.html')
})
export class AllConcat implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }


}
