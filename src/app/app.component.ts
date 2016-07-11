import './app.loader.ts';

import { Component, ViewEncapsulation,ViewContainerRef } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

import { Pages } from './pages';
import { Login } from './pages/manager/login';
import { AppState } from './app.state';
import { BaThemeConfigProvider, BaThemeConfig } from './theme';
import { BaThemeRun } from './theme/directives';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';

import { layoutPaths } from './theme/theme.constants';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [],
  directives: [BaThemeRun],
  providers: [BaThemeConfigProvider, BaThemeConfig, BaImageLoaderService, BaThemeSpinner],
  encapsulation: ViewEncapsulation.None,
  styles: [require('normalize.css'), require('./app.scss')],
  template: require('./app.html')
})
@RouteConfig([
  {
    path: '/pages/...',
    name: 'Pages',
    component: Pages,
    useAsDefault: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/**',
    redirectTo: ['Pages']
  }
])
export class App {

  isMenuCollapsed:boolean = false;
  viewContainerRef:ViewContainerRef;

  public constructor(
                private state:AppState,
                private imageLoader:BaImageLoaderService,
                private spinner:BaThemeSpinner,
                private config:BaThemeConfig,
                viewContainerRef:ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
    this.loadImages();

    this.state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public ngAfterViewInit():void {
    BaThemePreloader.load().then((values) => {
      this.spinner.hide();
    });
  }

  private loadImages():void {
    // register some loaders
    BaThemePreloader.registerLoader(this.imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
  }
}
