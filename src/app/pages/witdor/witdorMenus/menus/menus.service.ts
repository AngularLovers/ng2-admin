import {Injectable} from '@angular/core';

@Injectable()
export class MenusService {

  smartTableData = [{
      "id": 1,
      "name": "首页",
      "link": "http://witdor.com",
      "icon": "ion-ionic",
      "status": "primary"
    },{
    "id": 2,
    "name": "团队简介",
    "link": "http://witdor.com",
    "icon": "ion-information",
    "status": "danger"
  },{
    "id": 3,
    "name": "技术动态",
    "link": "http://witdor.com",
    "icon": "ion-plus-round",
    "status": "info"
  },{
    "id": 4,
    "name": "报价咨询",
    "link": "http://witdor.com",
    "icon": "ion-checkmark-circled",
    "status": "danger"
  },{
    "id": 5,
    "name": "项目流程",
    "link": "http://witdor.com",
    "icon": "ion-arrow-left-b",
    "status": "default"
  },{
    "id": 6,
    "name": "招贤纳士",
    "link": "http://witdor.com",
    "icon": "ion-arrow-right-b",
    "status": "success"
  },{
    "id": 7,
    "name": "关于我们",
    "link": "http://witdor.com",
    "icon": "ion-arrow-down-b",
    "status": "danger"
  },
  ];

  constructor() {
  }
}
