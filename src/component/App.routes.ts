import { provideRouter, RouterConfig } from '@angular/router';
import { BasicComponent,TodoComponent } from './index';

export const routes:RouterConfig = [
    {path: '', component: BasicComponent},
    {path: 'admin', component: TodoComponent},
    {path: 'user', component: BasicComponent},
    {path: 'tag', component: TodoComponent},
    {path: 'changeLog', component: BasicComponent},
    {path: 'goodBlog', component: TodoComponent},
    {path: 'goodPlugin', component: BasicComponent},
    {path: 'friendLink', component: TodoComponent},
    {path: 'systemSet', component: BasicComponent},
];

export const APP_ROUTER_PROVIDERS:any = [
    provideRouter(routes)
];
