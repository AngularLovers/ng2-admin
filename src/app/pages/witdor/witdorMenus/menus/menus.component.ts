import {Component, OnInit} from '@angular/core';

import { BaAppPicturePipe } from '../../../../theme/pipes/index';
import { MenusService } from './menus.service';
import { MODAL_DIRECTVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap/ng2-bootstrap';
import { CommonLinkComponent,LinkModel } from './../../../../theme/components/index';

@Component({
  moduleId: module.id,
  selector: 'witdor-menus',
  directives:[CommonLinkComponent,MODAL_DIRECTVES],
  providers: [MenusService,BS_VIEW_PROVIDERS],
  pipes: [BaAppPicturePipe],
  styles:[require('./menus.scss')],
  template: require('./menus.html')
})
export class MenusComponent implements OnInit {


  links:LinkModel[]=[];
  smartTableData:Array<any>;

  constructor(private menuService:MenusService) {
    this.smartTableData = menuService.smartTableData;
  }

  ngOnInit() {
    this.links=[
      {
        operate: "/delete",
        linkName:"删除",
        icon: "ion-nuclear",
        className: "btn-default"
      }
    ]
  }

<<<<<<< HEAD
=======

  showOperate(id:number):void {
    this.currentId = id;
    if(this.links.length<=0){
      this.links=[
        {
          linkUrl: "/update",
          linkName:"更新",
          icon: "ion-information",
          className: "btn-success",
          prompt:"编辑",
        }, {
          linkUrl: "/delete",
          linkName:"删除",
          icon: "ion-nuclear",
          className: "btn-danger",
          prompt:"编辑",
        }
      ]
    }
  }


  hideOperate():void {
    this.currentId = 0;
  }
>>>>>>> 98803ff2e0a835fbfe4cbe404d7e6e4d909fe54e
}
