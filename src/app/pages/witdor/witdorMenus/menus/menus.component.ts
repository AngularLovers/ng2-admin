import {Component, OnInit} from '@angular/core';

import { BaAppPicturePipe } from '../../../../theme/pipes/index';
import { MenusService } from './menus.service';
import { OperateComponent } from '../../../../theme/components/index';

@Component({
  moduleId: module.id,
  selector: 'witdor-menus',
  directives:[OperateComponent],
  providers: [MenusService],
  pipes: [BaAppPicturePipe],
  styles:[require('./menus.scss')],
  template: require('./menus.html')
})
export class MenusComponent implements OnInit {

  smartTableData:Array<any>;

  constructor(private menuService:MenusService) {
    this.smartTableData = menuService.smartTableData;
  }

  ngOnInit() {
  }
}
