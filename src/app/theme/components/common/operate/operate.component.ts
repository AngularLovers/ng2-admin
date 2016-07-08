import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'common-operate',
  template: require('./operate.html')
})
export class OperateComponent implements OnInit {

  flag:boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

   showOperate():void{
      this.flag = true;
  }


   hideOperate():void{
     this.flag= false;
  }
}
