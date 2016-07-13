import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CORE_DIRECTIVES, NgClass } from '@angular/common';
import { NgTableSortingDirective } from './ngTable-sorting.directive';

@Component({
  selector: 'ng-table',
  template: require('./ngTable.html'),
  styles: [require('./ngTable.scss')],
  directives: [NgTableSortingDirective, NgClass, CORE_DIRECTIVES]
})
export class NgTableComponent {
  // Table values
  @Input() public rows:Array<any> = [];
  @Input() public config:any = {};

  // Outputs (Events)
  @Output() public tableChanged:EventEmitter<any> = new EventEmitter();

  @Input()
  public set columns(values:Array<any>) {
    values.forEach((value:any) => {
      let column = this._columns.find((col:any) => col.name === value.name);
      if (column) {
        Object.assign(column, value);
      }
      if (!column) {
        this._columns.push(value);
      }
    });
  }

  public get columns():Array<any> {
    return this._columns;
  }

  public get configColumns():any {
    let sortColumns:Array<any> = [];

    this.columns.forEach((column:any) => {
      if (column.sort) {
        sortColumns.push(column);
      }
    });

    return {columns: sortColumns};
  }

  private _columns:Array<any> = [];

  public onChangeTable(column:any):void {
    this._columns.forEach((col:any) => {
      if (col.name !== column.name && col.sort !== false) {
        col.sort = '';
      }
    });
    this.tableChanged.emit({sorting: this.configColumns});
  }

  public getData(row:any, propertyName:string):string {
    return propertyName.split('.').reduce((prev:any, curr:string) => prev[curr], row);
  }
}
