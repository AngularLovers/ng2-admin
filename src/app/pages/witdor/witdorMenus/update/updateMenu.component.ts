import {Component, OnInit} from '@angular/core';

// const
let selector = 'update-menu';
let template = require( './updateMenu.html');

@Component({
  moduleId: module.id,
  selector: selector,
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
