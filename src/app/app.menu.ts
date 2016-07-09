export const menuItems = [
  {
    title: '维度因你而在',
    component: 'Dashboard',
    icon: 'ion-android-home',
    selected: false,
    expanded: false,
    order: 100
  },
  {
    title: '测试组件效果',
    component: 'Test',
    icon: 'ion-android-home',
    selected: false,
    expanded: false,
    order: 150
  },
  {
    title: '维度空间管理',
    component:"Witdors",
    icon: 'ion-compose',
    order: 200,
    subMenu: [
      {
        title: '首页管理',
        component: 'Indexes',
        icon: 'ion-compose',
      },
      {
        title: '菜单管理',
        component: 'WitdorMenus',
      },
      {
        title: '吉祥物管理',
        url: '#'
      },
      {
        title: '报价管理',
        url: '#'
      },
      {
        title: '关于我们管理',
        url: '#'
      },
      {
        title: '流程管理',
        url: '#'
      },
      {
        title: '招聘管理',
        url: '#'
      }
    ]
  },
  {
    title: '维度后台管理',
    component: 'Managers',
    icon: 'ion-compose',
    order: 300,
    subMenu: [
      {
        title: '权限管理',
        component: 'Admins',
      },
      {
        title: '菜单管理',
        component: 'Menus',
      },
      {
        title: '系统设置',
        url: '#'
      },
    ]
  },
  {
    title: '内置组件预览',
    component: 'Demos',
    icon: 'ion-edit',
    order: 400,
    subMenu: [
      {
        title: '编辑器',
        component: 'Ckeditor'
      },
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
      {
        title: '表单输入',
        component: 'Inputs',
      },
      {
        title: '表单布局',
        component: 'Layouts',
      },
      {
        title: '基本表格',
        component: 'BasicTables',
      },
      {
        title: '登陆',
        component: 'Login',
        url: '#/login',
      },
    ]
  }, {
    title: '菜单嵌套示例',
    icon: 'ion-compose',
    order: 200,
    subMenu: [
      {
        title: '二级菜单',
        icon: 'ion-compose',
        subMenu: [{
          title: '三级菜单',
          url: '#',
          disabled: true,
          selected: false,
          expanded: false
        }]
      },
      {
        title: '二级菜单',
        url: '#',
        subMenu: [{
          title: '三级菜单',
          url: '#',
          disabled: true,
          selected: false,
          expanded: false
        }]
      },
    ]
  },{
    title: '所有联系人管理',
    icon: 'ion-android-exit',
    component: 'AllConcat',
    order: 800,
  },
];
