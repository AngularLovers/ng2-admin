import {Component, OnInit} from '@angular/core';
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';

// const
let selector = 'update-menu';
let template = require( './updateMenu.html');

@Component({
  moduleId: module.id,
  selector: selector,
  directives: [MODAL_DIRECTVES],
  viewProviders:[BS_VIEW_PROVIDERS],
  template:template
})
export class updateMenuComponent implements OnInit {

  title:string;

  constructor() {
  }

  ngOnInit() {
    this.title = "修改菜单";
  }


}
