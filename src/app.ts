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
    selector: 'aries',
    directives: [
        ROUTER_DIRECTIVES,
        BasicComponent
    ],
    template: `
           <div class="container">
    <div class="row">
<!-- 左侧导航 -->
        <div class="col-md-2">
            <ul class="nav nav-list">
                <li class="list-group-item"><a [routerLink]="['']">后台首页<i class="glyphicon glyphicon-chevron-right"></i></a></li>
                <li class="list-group-item"><a [routerLink]="['admin']">权限管理 <i class="glyphicon glyphicon-chevron-right"></i></a></li>
                <li class="list-group-item"><a [routerLink]="['user']">用户管理 <i class="glyphicon glyphicon-chevron-right"></i></a></li>
                <li class="list-group-item"><a [routerLink]="['tag']">标签管理 <i class="glyphicon glyphicon-chevron-right"></i></a></li>
                <li class="list-group-item"><a [routerLink]="['changeLog']">更新日志 <i class="glyphicon glyphicon-chevron-right"></i></a></li>
                <li class="list-group-item"><a [routerLink]="['goodBlog']">优秀博客 <i class="glyphicon glyphicon-chevron-right"></i></a></li>
                <li class="list-group-item"><a [routerLink]="['goodPlugin']">优秀插件 <i class="glyphicon glyphicon-chevron-right"></i></a></li>
                <li class="list-group-item"><a [routerLink]="['friendLink']">友情链接 <i class="glyphicon glyphicon-chevron-right"></i></a></li>
                <li class="list-group-item"><a [routerLink]="['systemSet']">系统设置 <i class="glyphicon glyphicon-chevron-right"></i></a></li>
            </ul>
        </div>
        <!-- 右侧内容 -->
        <div class="col-md-10">
            <router-outlet></router-outlet>
        </div>
    </div>
</div>
    `
})

export class Aries {

}

bootstrap(Aries, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]).catch((err:any) => {
    console.log(err);
});
