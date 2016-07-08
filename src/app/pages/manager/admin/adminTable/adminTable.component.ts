import {Component, OnInit} from '@angular/core';


import { BaAppPicturePipe } from '../../../../theme/pipes/index';
import { AdminService } from './adminTable.service';
import { OperateComponent } from '../../../../theme/components/index';

@Component({
  moduleId: module.id,
  selector: 'admin-table',
  directives:[OperateComponent],
  providers: [AdminService],
  pipes: [BaAppPicturePipe],
  styles:[require('./adminTable.scss')],
  template: require('./adminTable.html')
})
export class AdminTableComponent implements OnInit {

  smartTableData:Array<any>;

  constructor(private adminService:AdminService) {
    this.smartTableData = adminService.smartTableData;
  }

  ngOnInit() {
  }
}
