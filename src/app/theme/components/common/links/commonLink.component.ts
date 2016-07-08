import { Component,Input, OnInit } from '@angular/core';

import { LinkModel } from './link.model';

@Component({
  moduleId: module.id,
  selector: 'common-link',
  styles:[require('./commonLink.scss')],
  template:require('./commonLink.html')
})
export class CommonLinkComponent implements OnInit {

  @Input() link:LinkModel;

  linkName:string = '';
  linkUrl:string = '';
  className:string = '';

  constructor() {
  }

  ngOnInit() {
    if (this.link !== undefined ) {
      this.linkName = this.link.linkName;
      this.linkUrl = this.link.linkUrl;
      this.className = this.link.className;
    }
  }


}
