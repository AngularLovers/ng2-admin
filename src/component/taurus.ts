/* 
 * Angular
 */
import { Component,ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'taurus',
    encapsulation: ViewEncapsulation.None,
    styles: [require('normalize.css'), require('./taurus.scss')],
    directives: [
        ROUTER_DIRECTIVES
    ],
    template: require('./taurus.html')
})

export class AppComponent {

}
