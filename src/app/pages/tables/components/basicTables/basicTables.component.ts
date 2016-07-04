import {Component, ViewEncapsulation} from '@angular/core';

import { BasicTablesService } from './basicTables.service'

import { BaCard ,HoverTable,BorderedTable,CondensedTable,StripedTable,ContextualTable,ResponsiveTable } from './../../../../theme/components/index';

@Component({
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, HoverTable, BorderedTable, CondensedTable, StripedTable, ContextualTable, ResponsiveTable],
  styles: [require('./basicTables.scss')],
  template: require('./basicTables.html'),
  providers: [BasicTablesService]
})
export class BasicTables {

  constructor() {
  }
}
