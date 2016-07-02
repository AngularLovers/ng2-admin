"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./index');
exports.routes = [
    { path: 'dashboard', component: index_1.BasicComponent },
    { path: 'wdSpace', component: index_1.TodoComponent },
    { path: 'allConcat', component: index_1.BasicComponent },
    { path: '**', redirectTo: 'dashboard' },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
