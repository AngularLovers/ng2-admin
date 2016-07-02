import { Component } from '@angular/core';

import { UserModel } from './../../../model/index';

let xiaomo:UserModel = new UserModel( 'xiaomo');
let xiaoming:UserModel = new UserModel('xiaoming');

@Component({
    selector: 'basic',
    styles:[require('./basic.scss')],
    template: require('./basic.html')
})

export class BasicComponent {

    users:Object;
    constructor() {
        this.users= [ xiaomo,xiaoming];
    };
}
