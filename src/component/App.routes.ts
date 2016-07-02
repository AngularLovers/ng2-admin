import { provideRouter, RouterConfig } from '@angular/router';
import { BasicComponent,TodoComponent } from './index';

export const routes:RouterConfig = [
    {path: 'dashboard', component: BasicComponent},
    {path: 'index', component: TodoComponent},
    {path: 'aboutGroup', component: BasicComponent},
    {path: 'vocationNews', component: TodoComponent},
    {path: 'suggestions', component: BasicComponent},
    {path: 'concatUs', component: TodoComponent},
    {path: 'priceAdvice', component: BasicComponent},
    {path: 'suggestions', component: TodoComponent},
    {path: 'projectProcess', component: TodoComponent},
    {path: 'goodJobs', component: BasicComponent},
    {path: 'aboutUs', component: BasicComponent},
    {path: 'systemSet', component: TodoComponent},
    {path: '**', redirectTo: 'dashboard'},
];

export const APP_ROUTER_PROVIDERS:any = [
    provideRouter(routes)
];
