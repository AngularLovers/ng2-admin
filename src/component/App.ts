/* 
 * Angular
 */
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'taurus',
    directives: [
        ROUTER_DIRECTIVES,
    ],
    template: require('./app.html')
})

export class AppComponent {

}
