import {Component, OnInit} from '@angular/core';

import { OperateComponent } from './../../../theme/components/index'

@Component({
  moduleId: module.id,
  selector: 'concat',
  directives:[OperateComponent],
  template: require('./concat.html')
})
export class ConcatComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }


}
