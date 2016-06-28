/* 
 * Angular
 */
import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { BasicComponent } from './component/Demo/Basic';

require('./static/images/logo.png');

@Component({
    selector: 'aries',
    directives: [
        BasicComponent
    ],
    template: `
        <div>
    <table class="table table-bordered table-striped table-hover">
        <tbody>
        <tr>
            <td>基本组件</td>
            <td>
                <basic></basic>
            </td>
        </tr>
        <tr>
        </tbody>
    </table>

</div>
    `
})
class Aries {
}

bootstrap(Aries,[
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]);
