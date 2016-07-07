import {Component, OnInit} from '@angular/core';


import { BaAppPicturePipe } from '../../../../theme/pipes/index';
import { AdminService } from './adminTable.service';

@Component({
  moduleId: module.id,
  selector: 'admin-table',
  providers: [AdminService],
  pipes: [BaAppPicturePipe],
  template: require('./adminTable.html')
})
export class AdminTableComponent implements OnInit {

  peopleTableData:Array<any>;

  constructor(private adminService:AdminService) {
    this.peopleTableData = adminService.peopleTableData;
  }

  ngOnInit() {
  }
}
