import {Component, OnInit} from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgIf} from '@angular/common';
import { PAGINATION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { NG_TABLE_DIRECTIVES} from 'ng2-table/ng2-table';
import { MenusService } from './menus.service';
import { MenusModel } from './menus.model';

let template = require('./menus.html');

@Component({
  selector: 'witdor-menus',
  template: template,
  styles:[require('./menus.scss')],
  directives: [NG_TABLE_DIRECTIVES, PAGINATION_DIRECTIVES, NgClass, NgIf, CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers:[MenusService]
})
export class MenuComponent implements OnInit {
  // 列
  public rows:MenusModel[] = [
  ];
  // 行
  public columns:Array<any> = [
    {title: 'id', name: 'id'},
    {title: '名字', name: 'name'},
    {title: '链接', name: 'link', sort: false},
    {title: '图标', name: 'icon',},
    {title: '显示', name: 'statusIcon',},
    {title: '状态.', name: 'status', sort: 'asc'},
  ];

  // 从后端获取的数据
  public data:MenusModel[] =[]; //数据内容

  public page:number = 1; // 页码
  public itemsPerPage:number = 10; //每页条数
  public maxSize:number = 5; //最大量数
  public numPages:number = 1; //当前页码
  public length:number = 0; // 数据总量

  /**
   * 配置
   * @type {{paging: boolean, sorting: {columns: Array<any>}, filtering: {filterString: string, columnName: string}}}
     */
  public config:any = {
    paging: true, //是否排序
    sorting: {columns: this.columns}, //排序规则
    filtering: {
      name: { filterString: '' },
      status: { filterString: '' }
    } //过滤器

  };


  public constructor(public menusService:MenusService) {
  }

  /**
   * init
   */
  public ngOnInit():void {
    this.data = this.menusService.smartTableData;
    this.length = this.data.length;
    this.onChangeTable(this.config);
  }

  /**
   * 跳页
   * @param page
   * @param data
   * @returns {MenusModel[]}
     */
  public changePage(page:any, data:MenusModel[] = this.data):Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  /**
   * 改变排序
   * @param data
   * @param config
   * @returns {any}
     */
  public changeSort(data:any, config:any):any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '') {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  /**
   * 改变过滤条件
   * @param data
   * @param config
   * @returns {any}
     */
  public changeFilter(data:MenusModel[], config:any):any {
    if (!config.filtering) {
      return data;
    }

    return data.filter((item:any) =>
    item["name"].match(this.config.filtering.name.filterString) &&
    item["status"].match(this.config.filtering.status.filterString));

  }

  /**
   * 数据变化
   * @param config
   * @param page
     */
  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering); //合并对象,把config.filtering合并到this.config.filtering
    }
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);//合并对象,把config.sorting合并到this.config.sorting
    }
    let filteredData:MenusModel[] = this.changeFilter(this.data, this.config);
    let sortedData:MenusModel[] = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }
}
