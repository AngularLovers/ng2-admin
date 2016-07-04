import { Injectable } from '@angular/core';
import { menuItems } from '../../../app.menu';

@Injectable()
export class BaSidebarService {

  private router;

  public getMenuItems():Array<Object> {
    return menuItems;
  }

  public setRouter(router): BaSidebarService {
    this.router = router;
    return this;
  }

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

  private selectItem(instructions, item, parentMenu = null) {
    let route = this.generateRoute(instructions);
    item.selected = !item.disabled && this.isCurrent(route);
    if (parentMenu) {
      parentMenu.expanded = parentMenu.expanded || item.selected;
    }
  }

  private isCurrent(route) {
    return route ? this.router.isRouteActive(route) : false;
  }

  private generateRoute(instructions) {
    return instructions.filter(i => typeof i !== 'undefined').length > 0 ? this.router.generate(instructions) : null;
  }
}
