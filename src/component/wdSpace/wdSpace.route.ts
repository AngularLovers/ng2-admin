import { provideRouter, RouterConfig } from '@angular/router';
import { BasicComponent,TodoComponent } from './index';

export const routes:RouterConfig = [
    {path: 'index', component: TodoComponent},
    {path: 'aboutGroup', component: BasicComponent},
    {path: 'vocationNews', component: TodoComponent},
    {path: 'priceAdvice', component: BasicComponent},
    {path: 'projectProcess', component: TodoComponent},
    {path: 'goodJobs', component: BasicComponent},
    {path: 'aboutUs', component: TodoComponent},
];

export const APP_ROUTER_PROVIDERS:any = [
    provideRouter(routes)
];
