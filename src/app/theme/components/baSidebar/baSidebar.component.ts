import { Component, ElementRef, HostListener, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { AppState } from '../../../app.state';
import { layoutSizes } from '../../../theme';
import { BaSlimScroll } from '../../../theme/directives';
import { BaSidebarService } from './baSidebar.service';
import { Logger } from "./../../services/logger.service";

@Component({
  selector: 'ba-sidebar',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./baSidebar.scss')],
  template: require('./baSidebar.html'),
  providers: [BaSidebarService],
  directives: [BaSlimScroll]
})
export class BaSidebar {
  
  public menuItems:Array<any>; //菜单项目
  public menuHeight:number; //菜单高度
  public isMenuCollapsed:boolean = false; //菜单是否折叠
  
  public showHoverElem:boolean; //是否显示hover
  public hoverElemHeight:number; // hover的高度
  public hoverElemTop:number; // hover距顶大小
  
  public outOfArea:number = -200; //外围区域
  
  public isMenuShouldCollapsed:boolean = false; //菜单是否应该折叠
  protected onRouteChange; //路由变化
  
  constructor(
    private logger:Logger,
    private elementRef:ElementRef,
    private router:Router,
    private sidebarService:BaSidebarService,
    private state:AppState
  ) {
    this.sidebarService.getMenuItems().then(menItem=>{
      this.logger.info(menItem);
      this.menuItems = menItem;
      this.onRouteChange = this.router.root.subscribe((path) => this.selectMenuItem());
    });
    
    this.state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }
  
  
  /**
   * 初始化: 如果菜单应该被折叠，那就把菜单折叠
   */
  public ngOnInit():void {
    if(this.shouldMenuCollapse()) {
      this.menuCollapse();
    }
  }
  
  /**
   * 销毁
   */
  public ngOnDestroy():void {
    this.onRouteChange.unsubscribe();
  }
  
  public ngAfterViewInit():void {
    this.updateSidebarHeight();
  }
  
  @HostListener('window:resize')
  public onWindowResize():void {
    
    var isMenuShouldCollapsed = this.shouldMenuCollapse();
    
    if(this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
      this.menuCollapseStateChange(isMenuShouldCollapsed);
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
    this.updateSidebarHeight();
  }
  
  public menuExpand():void {
    this.menuCollapseStateChange(false);
  }
  
  public menuCollapse():void {
    this.menuCollapseStateChange(true);
  }
  
  public menuCollapseStateChange(isCollapsed:boolean):void {
    this.isMenuCollapsed = isCollapsed;
    this.state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }
  
  public hoverItem($event):void {
    this.showHoverElem = true;
    this.hoverElemHeight = $event.currentTarget.clientHeight;
    // TODO: get rid of magic 66 constant
    this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
  }
  
  public updateSidebarHeight():void {
    // TODO: get rid of magic 84 constant
    this.menuHeight = this.elementRef.nativeElement.childNodes[0].clientHeight - 84;
  }
  
  public toggleSubMenu($event, item):boolean {
    var submenu = jQuery($event.currentTarget).next();
    
    if(this.isMenuCollapsed) {
      this.menuExpand();
      if(!item.expanded) {
        item.expanded = true;
      }
    } else {
      item.expanded = !item.expanded;
      submenu.slideToggle();
    }
    
    return false;
  }
  
  private shouldMenuCollapse():boolean {
    return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }
  
  private selectMenuItem():void {
    if(!this.menuItems) {
      this.logger.error('获取不到数据');
      return;
    }
    let currentMenu = this.sidebarService.setRouter(this.router).selectMenuItem(this.menuItems);
    this.state.notifyDataChanged('menu.activeLink', currentMenu);
    // hide menu after natigation on mobile devises
    if(this.shouldMenuCollapse()) {
      this.menuCollapse();
    }
  }
}
