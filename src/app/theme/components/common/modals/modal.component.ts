import { Component,OnInit } from '@angular/core';
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'common-modals',
  directives: [MODAL_DIRECTVES],
  viewProviders:[BS_VIEW_PROVIDERS],
  template: require('./modals.html'),
  styles:[require('./modal.scss')],
})

export class CommonModalComponent implements OnInit{

  title:string;

  ngOnInit() {
    this.title = "修改菜单";
  }

}
