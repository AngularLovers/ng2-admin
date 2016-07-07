import {Directive, Input, Output, ElementRef, EventEmitter} from '@angular/core';

import './baSlimScroll.loader.ts';

@Directive({
  selector: '[baSlimScroll]'
})
export class BaSlimScroll {

  @Input() public baSlimScrollOptions:Object;

  constructor(private elementRef:ElementRef) {
  }

  ngOnChanges(changes) {
    this.scroll();
  }

  private scroll() {
    this.destroy();
    this.init();
  }

  private init() {
    jQuery(this.elementRef.nativeElement).slimScroll(this.baSlimScrollOptions);
  }

  private destroy() {
    jQuery(this.elementRef.nativeElement).slimScroll({ destroy: true });
  }
}
