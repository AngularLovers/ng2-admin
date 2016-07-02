import { provideRouter, RouterConfig } from '@angular/router';
import { BasicComponent,TodoComponent } from './index';

export const routes:RouterConfig = [
    {path: 'dashboard', component: BasicComponent},
    {path: 'wdSpace', component: TodoComponent},
    {path: 'allConcat', component: BasicComponent},
    {path: '**', redirectTo: 'dashboard'},
];

export const APP_ROUTER_PROVIDERS:any = [
    provideRouter(routes)
];
