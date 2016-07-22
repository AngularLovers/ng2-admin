import {Component,Input } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

// webpack html imports
let template = require('./pagination.html');

@Component({
  selector: 'common-pagination',
  directives: [PAGINATION_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES],
  template: template,
  styles:[require('./pagination.scss')],
})
export class CommonPaginationComponent {
  @Input() totalItems:number;
  public currentPage:number = 1; //当前页码
  public maxSize:number = 10; // 每页数量

  public setPage(pageNo:number):void {
    this.currentPage = pageNo;
  };
}
