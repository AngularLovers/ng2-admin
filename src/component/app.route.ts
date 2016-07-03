import { provideRouter, RouterConfig } from '@angular/router';
import { BasicComponent,TodoComponent,BaBackTopComponent } from './index';

export const routes:RouterConfig = [
    {path: 'dashboard', component: BasicComponent},
    {path: 'wdSpace', component: BaBackTopComponent},
    {path: 'allConcat', component: BasicComponent},
    {path: 'index', component: TodoComponent},
    {path: 'aboutGroup', component: BasicComponent},
    {path: 'vocationNews', component: TodoComponent},
    {path: 'priceAdvice', component: BasicComponent},
    {path: 'projectProcess', component: TodoComponent},
    {path: 'goodJobs', component: BasicComponent},
    {path: 'aboutUs', component: TodoComponent},
    {path: '**', redirectTo: 'dashboard'},
];

export const APP_ROUTER_PROVIDERS:any = [
    provideRouter(routes)
];
