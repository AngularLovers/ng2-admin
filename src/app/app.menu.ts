export const menuItems = [
  {
    title: '主面板',
    component: 'Dashboard',
    icon: 'ion-android-home',
    selected: false,
    expanded: false,
    order: 0
  },
  {
    title: '维度空间官网',
    icon: 'ion-compose',
    selected: false,
    expanded: false,
    order: 100,
    subMenu: [
      {
        title: '官网首页',
        url: '#', subMenu: [{
        title: '三级菜单1',
        url: '#',
        disabled: true,
        selected: false,
        expanded: false
      }]
      },
      {
        title: '团队介绍',
        url: '#',
        subMenu: [{
          title: '三级菜单1',
          url: '#',
          disabled: true,
          selected: false,
          expanded: false
        }]
      },
      {
        title: '技术动态',
        url: '#',
        subMenu: [{
          title: '三级菜单1',
          url: '#',
          disabled: true,
          selected: false,
          expanded: false
        }]
      },
      {
        title: '报价咨询',
        url: '#',
        subMenu: [{
          title: '三级菜单1',
          url: '#',
          disabled: true,
          selected: false,
          expanded: false
        }]
      },
      {
        title: '项目流程',
        url: '#',
        subMenu: [{
          title: '三级菜单1',
          url: '#',
          disabled: true,
          selected: false,
          expanded: false
        }]
      },
      {
        title: '招贤纳士',
        url: '#',
        subMenu: [{
          title: '三级菜单1',
          url: '#',
          disabled: true,
          selected: false,
          expanded: false
        }]
      },
      {
        title: '关于我们',
        url: '#',
        subMenu: [{
          title: '三级菜单1',
          url: '#',
          disabled: true,
          selected: false,
          expanded: false
        }]
      }
    ]
  },
  {
    title: '编辑器',
    component: 'Editors',
    icon: 'ion-edit',
    order: 200,
    subMenu: [
      {
        title: '编辑器',
        component: 'Ckeditor'
      }
    ]
  },
  {
    title: 'UI特征',
    component: 'Ui',
    icon: 'ion-android-laptop',
    selected: false,
    expanded: false,
    order: 300,
    subMenu: [
      {
        title: '文字排版',
        component: 'Typography',
      },
      {
        title: '按钮',
        component: 'Buttons',
      },
      {
        title: '图标',
        component: 'Icons',
      },
      {
        title: '栅格布局',
        component: 'Grid',
      },
    ]
  },
  {
    title: '表单元素',
    component: 'Forms',
    icon: 'ion-compose',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: '表单输入',
        component: 'Inputs',
      },
      {
        title: '表单布局',
        component: 'Layouts',
      },
    ]
  },
  {
    title: '表格',
    component: 'Tables',
    icon: 'ion-grid',
    selected: false,
    expanded: false,
    order: 500,
    subMenu: [
      {
        title: '基本表格',
        component: 'BasicTables',
      }
    ]
  },
  {
    title: '页面',
    icon: 'ion-document',
    selected: false,
    expanded: false,
    order: 650,
    subMenu: [
      {
        title: '登陆',
        url: '#/login',
      },
    ]
  },
  {
    title: '其他链接',
    url: 'http://witdor.com',
    icon: 'ion-android-exit',
    selected: false,
    expanded: false,
    order: 800,
    target: '_blank'
  }
];