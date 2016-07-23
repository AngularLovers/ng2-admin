import {Injectable} from '@angular/core';

@Injectable()
export class MenusService {
  menus= [
    1,2,3,4,5,6,7,8
  ];

  constructor() {
    this.menus = this.getMenus();
  }

  getMenus() {
    return this.menus;
  }

}
