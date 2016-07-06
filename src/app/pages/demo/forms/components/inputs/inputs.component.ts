import { Component, ViewEncapsulation } from '@angular/core';

import { BaCard, StandardInputs,ValidationInputs,GroupInputs,CheckboxInputs } from './../../../../../theme/components/index';

@Component({
  selector: 'inputs',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, StandardInputs, ValidationInputs, GroupInputs, CheckboxInputs],
  template: require('./inputs.html'),
})
export class Inputs {

  constructor() {
  }
}
