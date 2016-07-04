import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard,InlineForm,BlockForm,HorizontalForm ,BasicForm ,WithoutLabelsForm} from '../../../../theme/components/index';

@Component({
  selector: 'layouts',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, InlineForm, BlockForm, HorizontalForm, BasicForm, WithoutLabelsForm],
  styles: [],
  template: require('./layouts.html'),
})
export class Layouts {

  constructor() {
  }

  ngOnInit() {
  }
}
