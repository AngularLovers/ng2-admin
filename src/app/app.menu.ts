export class Menu {
  title:string;
  component:string;
  icon:string;
  selected:boolean;
  expanded:boolean;
  order:number;
  subMenu:Array<Menu>;

  constructor(title:string, component?:string, icon?:string, selected?:boolean, expanded?:boolean, order?:number, subMenu?:Array<Menu>) {
    this.title = title;
    this.component = component || '';
    this.icon = icon || '';
    this.selected = selected || false;
    this.expanded = expanded || false;
    this.order = order || 0;
    this.subMenu = subMenu || [];
  }
}
