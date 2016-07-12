import {Component, OnInit} from '@angular/core';

import { searchNamePipe } from './menus.pipe';
import { MenusService } from './menus.service';
import { MODAL_DIRECTVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap/ng2-bootstrap';
import { CommonSearchComponent,CommonPaginationComponent,CommonLinkComponent,LinkModel } from './../../../../theme/components/index';

@Component({
  moduleId: module.id,
  selector: 'witdor-menus',
  directives:[CommonSearchComponent,CommonPaginationComponent,CommonLinkComponent,MODAL_DIRECTVES],
  providers: [MenusService,BS_VIEW_PROVIDERS],
  pipes: [searchNamePipe],
  styles:[require('./menus.scss')],
  template: require('./menus.html')
})
export class MenusComponent implements OnInit {
  //页码相关
  public totalItems:number = 0; // 数据条数

  // 链接相关
  links:LinkModel[]=[];
  smartTableData:Array<any>;

  constructor(private menuService:MenusService) {
    this.smartTableData = menuService.smartTableData; //取值
    this.totalItems= this.smartTableData.length; //取数据条数
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
}
