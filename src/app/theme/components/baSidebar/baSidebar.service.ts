import { Injectable } from '@angular/core';
import { menuItems } from '../../../app.menu';

@Injectable()
export class BaSidebarService {

  private router;

  /**
   * 获取全部菜单
   * @returns {{title: string, component: string, icon: string, selected: boolean, expanded: boolean, order: number}|{title: string, icon: string, selected: boolean, expanded: boolean, order: number, subMenu: {title: string, url: string, subMenu: {title: string, url: string, disabled: boolean, selected: boolean, expanded: boolean}[]}[]}|{title: string, component: string, icon: string, order: number, subMenu: {title: string, component: string}|{title: string, component: string, url: string}[]}|{title: string, url: string, icon: string, order: number, subMenu: {title: string, url: string, disabled: boolean, selected: boolean, expanded: boolean}[]}[]}
     */
  public getMenuItems():Array<Object> {
    return menuItems;
  }

  /**
   * 设置路由
   * @param router
   * @returns {BaSidebarService}
     */
  public setRouter(router): BaSidebarService {
    this.router = router;
    return this;
  }

  /**
   * 返回当前选中的菜单
   * @param items
   * @returns {any}
     */
  public selectMenuItem(items:Array<any>) {
    let currentMenu;

    let assignCurrent = (menu) => (menu.selected ? currentMenu = menu : null);

    items.forEach((menu: any) => {

      this.selectItem([menu.component], menu);
      assignCurrent(menu);

      if (menu.subMenu) {
        menu.subMenu.forEach((subMenu) => {
          this.selectItem([menu.component, subMenu.component], subMenu, menu);
          assignCurrent(subMenu);
        });
      }
    });
    return currentMenu;
  }

  /**
   * 选择菜单
   * @param instructions
   * @param item
   * @param parentMenu
     */
  private selectItem(instructions, item, parentMenu = null) {
    let route = this.generateRoute(instructions);
    item.selected = !item.disabled && this.isCurrent(route);
    if (parentMenu) {
      parentMenu.expanded = parentMenu.expanded || item.selected;
    }
  }

  /**
   * 是否是当前选中菜单
   * @param route
   * @returns {any}
     */
  private isCurrent(route) {
    return route ? this.router.isRouteActive(route) : false;
  }

  /**
   * 生成路由
   * @param instructions
   * @returns {Instruction|ComponentInstruction}
     */
  private generateRoute(instructions) {
    return instructions.filter(i => typeof i !== 'undefined').length > 0 ? this.router.generate(instructions) : null;
  }
}
