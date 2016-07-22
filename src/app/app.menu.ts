export interface Menu {
  title:string;
  component:string;
  icon?:string;
  selected?:boolean;
  expanded?:boolean;
  order?:number;
  subMenu?:Array<Object>;
}
