import {Component, OnInit} from '@angular/core';

import { BaAppPicturePipe } from '../../../../theme/pipes/index';
import { MenusService } from './menus.service';
import { MODAL_DIRECTVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap/ng2-bootstrap';
import { CommonPaginationComponent,CommonLinkComponent,LinkModel } from './../../../../theme/components/index';

@Component({
  moduleId: module.id,
  selector: 'witdor-menus',
  directives:[CommonPaginationComponent,CommonLinkComponent,MODAL_DIRECTVES],
  providers: [MenusService,BS_VIEW_PROVIDERS],
  pipes: [BaAppPicturePipe],
  styles:[require('./menus.scss')],
  template: require('./menus.html')
})
export class MenusComponent implements OnInit {
  public totalItems:number = 0; // 数据条数
  public currentPage:number = 4; //当前页码
  public maxSize:number = 10; // 每页数量
  
  links:LinkModel[]=[];
  smartTableData:Array<any>;

  constructor(private menuService:MenusService) {
    this.smartTableData = menuService.smartTableData;
    this.totalItems= this.smartTableData.length;
  }

  ngOnInit() {

    if(this.links.length<=0){
      this.links=[
        {
          linkUrl: "/update",
          linkName:"编辑",
          icon: "ion-edit",
          className: "btn-info",
        }, {
          linkUrl: "/delete",
          linkName:"删除",
          icon: "ion-close-round",
          className: "btn-danger",
        }
      ]
    }
  }


  // showOperate(id:number):void {
  //
  // }


  // hideOperate():void {
  //   this.currentId = 0;
  // }

}
