/* 
 * Angular
 */
import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { BasicComponent} from './component/Demo/Basic';
import { APP_ROUTER_PROVIDERS} from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';


@Component({
    selector: 'taurus',
    directives: [
        ROUTER_DIRECTIVES,
        BasicComponent
    ],
    template: require('./app.html')
})

export class Aries {

}

bootstrap(Aries, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]).catch((err:any) => {
    console.log(err);
});
