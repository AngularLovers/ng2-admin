import {Component, OnInit} from '@angular/core';

import { BaCard } from './../../../theme/components/index';
import { BaAppPicturePipe } from './../../../theme/pipes/index';
import { AdminService } from './admin.service';

@Component({
  moduleId: module.id,
  selector: 'admins',
  directives: [BaCard],
  providers: [AdminService],
  pipes: [BaAppPicturePipe],
  template: require('./admin.html')
})
export class AdminsComponent implements OnInit {

  peopleTableData:Array<any>;

  constructor(private adminService:AdminService) {
    this.peopleTableData = adminService.peopleTableData;
  }

  ngOnInit() {
  }
}
