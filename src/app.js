"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var Basic_1 = require('./component/Demo/Basic');
require('./static/images/logo.png');
var Aries = (function () {
    function Aries() {
    }
    Aries = __decorate([
        core_1.Component({
            selector: 'aries',
            directives: [
                Basic_1.BasicComponent
            ],
            template: "\n        <div>\n    <table class=\"table table-bordered table-striped table-hover\">\n        <tbody>\n        <tr>\n            <td>\u57FA\u672C\u7EC4\u4EF6</td>\n            <td>\n                <basic></basic>\n            </td>\n        </tr>\n        <tr>\n        </tbody>\n    </table>\n\n</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Aries);
    return Aries;
}());
platform_browser_dynamic_1.bootstrap(Aries, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS
]);
