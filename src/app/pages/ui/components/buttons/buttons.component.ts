import {Component, ViewEncapsulation} from '@angular/core';

import {
  BaCard,
  FlatButtons,
  RaisedButtons,
  SizedButtons,
  DisabledButtons,
  IconButtons,
  LargeButtons,
  DropdownButtons,
  GroupButtons
} from '../../../../theme/components/index';

@Component({
  selector: 'buttons',
  encapsulation: ViewEncapsulation.None,
  directives: [
    BaCard,
    FlatButtons,
    RaisedButtons,
    SizedButtons,
    DisabledButtons,
    IconButtons,
    LargeButtons,
    DropdownButtons,
    GroupButtons
  ],
  styles: [require('./buttons.scss')],
  template: require('./buttons.html'),
})
export class Buttons {

  constructor() {
  }
}
