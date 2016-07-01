/* 
 * Angular
 */
import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { BasicComponent} from './../demo/Basic';

@Component({
    selector: 'taurus',
    directives: [
        ROUTER_DIRECTIVES,
        BasicComponent
    ],
    template: require('./app.html')
})

export class AppComponent {

}
