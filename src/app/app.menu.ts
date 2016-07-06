export const menuItems = [
  {
    title: '因你而在',
    component: 'Dashboard',
    icon: 'ion-android-home',
    selected: false,
    expanded: false,
    order: 100
  },
  {
    title: '维度后台管理',
    icon: 'ion-compose',
    selected: false,
    expanded: false,
    order: 200,
    subMenu: [
      {
        title: '权限管理',
        url: '#', subMenu: [{
        title: '三级菜单1',
        url: '#',
        disabled: true,
        selected: false,
        expanded: false
      }]
      },
      {
        title: '菜单管理',
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
        title: '系统设置',
        url: '#',
        subMenu: [{
          title: '三级菜单1',
          url: '#',
          disabled: true,
          selected: false,
          expanded: false
        }]
      },
    ]
  },
  {
    title: '维度空间管理',
    icon: 'ion-compose',
    selected: false,
    expanded: false,
    order: 300,
    subMenu: [
      {
        title: '首页管理',
        url: '#', subMenu: [{
        title: '三级菜单1',
        url: '#',
        disabled: true,
        selected: false,
        expanded: false
      }]
      },
      {
        title: '吉祥物管理',
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
        title: '联系我们管理',
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
        title: '报价管理',
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
        title: '关于我们管理',
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
        title: '流程管理',
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
        title: '招聘管理',
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
  },
  {
    title: '魔兽世界管理',
    url: 'http://witdor.com',
    icon: 'ion-android-exit',
    order: 500,
    subMenu: [{
      title: '三级菜单1',
      url: '#',
      disabled: true,
      selected: false,
      expanded: false
    }]
  },
  {
    title: '守卫先锋管理',
    url: 'http://witdor.com',
    icon: 'ion-android-exit',
    order: 600,
    subMenu: [{
      title: '三级菜单1',
      url: '#',
      disabled: true,
      selected: false,
      expanded: false
    }]
  },
  {
    title: '技术文档管理',
    url: 'http://witdor.com',
    icon: 'ion-android-exit',
    order: 700,
    subMenu: [{
      title: '三级菜单1',
      url: '#',
      disabled: true,
      selected: false,
      expanded: false
    }]
  }, {
    title: '联系人管理',
    url: 'http://witdor.com',
    icon: 'ion-android-exit',
    order: 800,
    subMenu: [{
      title: '三级菜单1',
      url: '#',
      disabled: true,
      selected: false,
      expanded: false
    }]
  }
];
