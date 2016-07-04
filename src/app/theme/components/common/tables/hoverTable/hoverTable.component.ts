import {Component} from '@angular/core';

import {BaAppPicturePipe} from './../../../../pipes/index';
import { BasicTablesService } from './../../../../../../app/pages/tables/components/basicTables/basicTables.service';

@Component({
  selector: 'hover-table',
  template: require('./hoverTable.html'),
  pipes: [BaAppPicturePipe]
})
export class HoverTable {

  metricsTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.metricsTableData = _basicTablesService.metricsTableData;
  }
}
