/* 
 * Angular
 */
import { Component,ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'taurus',
    encapsulation: ViewEncapsulation.None,
    styles: [require('normalize.css'), require('./app.scss')],
    directives: [
        ROUTER_DIRECTIVES
    ],
    template: require('./app.html')
})

export class AppComponent {

}
