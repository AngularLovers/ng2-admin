import {Component, OnInit} from '@angular/core';

import { BaCard } from '../../../theme/components/index';
import { AdminTableComponent } from './adminTable/adminTable.component';

@Component({
  moduleId: module.id,
  selector: 'admins',
  directives:[AdminTableComponent,BaCard],
  template: require('./admins.html')
})
export class AdminsComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }


}
