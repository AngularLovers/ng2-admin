import {Component} from '@angular/core';

import {BaAppPicturePipe} from './../../../../pipes/index';
import {BasicTablesService} from './../../../../services/basicTables.service';

@Component({
  selector: 'condensed-table',
  template: require('./condensedTable.html'),
  pipes: [BaAppPicturePipe]
})
export class CondensedTable {

  peopleTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.peopleTableData = _basicTablesService.peopleTableData;
  }
}
