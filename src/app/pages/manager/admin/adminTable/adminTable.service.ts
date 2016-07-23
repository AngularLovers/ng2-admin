import {Injectable} from '@angular/core';

@Injectable()
export class AdminService {

  smartTablePageSize = 10;

  smartTableData = [
    {
      id: 1,
      name: '小莫',
      job: '前端',
      status: 'primary',
      power: '1'
    },
    {
      id: 2,
      name: 'Alice',
      job: '产品',
      status: 'danger',
      power: '1'
    },
    {
      id: 3,
      name: '胡旭',
      job: '后端',
      status: 'success',
      power: '1'
    },
    {
      id: 4,
      name: '龙猫',
      job: 'UI',
      status: 'danger',
      power: '1'
    },
    {
      id: 5,
      name: '吉吉',
      job: '前端',
      status: 'primary',
      power: '1'
    },
    {
      id: 6,
      name: '维度',
      job: '官网',
      status: 'success',
      power: '1'
    },
    {
      id: 7,
      name: 'OneKey',
      job: 'IOS',
      status: 'default',
      power: '3'
    },
    {
      id: 8,
      name: '小莫',
      job: '前端',
      status: 'info',
      power: '2'
    },
    {
      id: 9,
      name: '牛茜',
      job: 'UI',
      status: 'primary',
      power: '2'
    },
    {
      id: 10,
      name: 'OneKey',
      job: 'IOS',
      status: 'danger',
      power: '3',
    }
  ];

  editableTableData:Array<any>;

  peopleTableData = [
    {
      id: 1,
      firstName: '小莫',
      lastName: '前端',
      username: '@mdo',
      email: 'mdo@gmail.com',
      age: '28',
      status: 'info'
    },
    {
      id: 2,
      firstName: 'Alice',
      lastName: '前端',
      username: '@fat',
      email: 'fat@yandex.ru',
      age: '45',
      status: 'primary'
    },
    {
      id: 3,
      firstName: '胡旭',
      lastName: '后端',
      username: '@twitter',
      email: 'twitter@outlook.com',
      age: '18',
      status: 'success'
    },
    {
      id: 4,
      firstName: '龙猫',
      lastName: 'UI设计师',
      username: '@snow',
      email: 'snow@gmail.com',
      age: '20',
      status: 'danger'
    },
    {
      id: 5,
      firstName: '牛茜',
      lastName: 'UI设计师',
      username: '@jack',
      email: 'jack@yandex.ru',
      age: '30',
      status: 'warning'
    }
  ];

  metricsTableData = [
    {
      image: 'app/browsers/chrome.svg',
      browser: '谷歌浏览器',
      visits: '10,392',
      isVisitsUp: true,
      purchases: '4,214',
      isPurchasesUp: true,
      percent: '45%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/firefox.svg',
      browser: '火狐浏览器',
      visits: '7,873',
      isVisitsUp: true,
      purchases: '3,031',
      isPurchasesUp: false,
      percent: '28%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/ie.svg',
      browser: 'Internet Explorer',
      visits: '5,890',
      isVisitsUp: false,
      purchases: '2,102',
      isPurchasesUp: false,
      percent: '17%',
      isPercentUp: false
    },
    {
      image: 'app/browsers/safari.svg',
      browser: 'Safari',
      visits: '4,001',
      isVisitsUp: false,
      purchases: '1,001',
      isPurchasesUp: false,
      percent: '14%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/opera.svg',
      browser: 'Opera',
      visits: '1,833',
      isVisitsUp: true,
      purchases: '83',
      isPurchasesUp: true,
      percent: '5%',
      isPercentUp: false
    }
  ];

  users = [
    {
      "id": 1,
      "name": "小莫",
      "status": 4,
      "group": 3
    },
    {
      "id": 2,
      "name": "龙猫",
      "status": 3,
      "group": 1
    },
    {
      "id": 3,
      "name": "牛茜",
      "status": 3,
      "group": 2
    },
    {
      "id": 4,
      "name": "阿仁",
      "group": 4
    },
    {
      "id": 5,
      "name": "胡旭",
      "status": 1,
      "group": 1
    },
    {
      "id": 6,
      "name": "王玉",
      "status": 4,
      "group": 2
    },
    {
      "id": 7,
      "name": "吉吉",
      "status": 4,
      "group": 1
    },
    {
      "id": 8,
      "name": "蜗牛",
      "status": 4,
      "group": 2
    },
    {
      "id": 9,
      "name": "兔腿",
      "status": 1,
      "group": 2
    },
    {
      "id": 10,
      "name": "黄宜亮",
      "status": 1,
      "group": 3
    }
  ];

  statuses = [
    {value: 1, text: 'Good'},
    {value: 2, text: 'Awesome'},
    {value: 3, text: 'Excellent'},
  ];

  groups = [
    {id: 1, text: 'user'},
    {id: 2, text: 'customer'},
    {id: 3, text: 'vip'},
    {id: 4, text: 'admin'}
  ];
permissions=[
  {
    "id":1,
    "name":"超级管理员",
    "permission":[
      {
        "id":1,
        "name":"维度后台管理"
      },{
        "id":2,
        "name":"维度官网管理"
      }
    ]
  }
]


  constructor() {
    this.editableTableData = this.smartTableData.slice(0, 36);
  }
}
