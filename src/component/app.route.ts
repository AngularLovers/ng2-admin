import { provideRouter, RouterConfig } from '@angular/router';
import { BasicComponent,TodoComponent,BaBackTopComponent } from './index';

export const routes:RouterConfig = [
    {path: 'dashboard', component: BasicComponent},
    {path: 'wdSpace', component: BaBackTopComponent},
    {path: 'allConcat', component: BasicComponent},
    {path: '**', redirectTo: 'dashboard'},
];

export const APP_ROUTER_PROVIDERS:any = [
    provideRouter(routes)
];
