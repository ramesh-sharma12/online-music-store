/// <reference path="../../typings/index.d.ts" />
import {Component, ComponentRef, OnInit, OnChanges, bind} from '@angular/core';
import {RouterOutlet,RouterLink, Router, ROUTER_DIRECTIVES, provideRouter, RouterConfig} from '@angular/router';
import {NgFor, NgIf, Location } from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Base} from './base';
import {Header } from './components/common/header';
import {Footer } from './components/common/footer';
import {SideNav } from './components/common/SideNav';
import {Home} from './components/home/index';
import {About} from './components/about/index';
import {SongIndex} from './components/store/index';
import {SongDetails} from './components/store/details';
import {AlbumDetails} from './components/store/album';
import {ProxyService} from './services/proxyService';
import './less/app.less';

@Component({
    selector: 'my-app',
    template: require('./app.html'),
    directives: [RouterOutlet, ROUTER_DIRECTIVES, Header, Footer , SideNav, RouterLink]
})
export class AppComponent //extends Base
{    
}    

export const routes: RouterConfig = [
    { path: '', redirectTo: '/songs', pathMatch: 'full'},
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'sideNav', component: SideNav },
    { path: 'albums', component: AlbumDetails },
    { path: 'albums/:id', component: AlbumDetails },
    { path: 'songs', component: SongIndex }
];

export const appRouterProviders = [
    provideRouter(routes)
];

export const moviesInjectables = [
    bind(ProxyService).toClass(ProxyService),
    // We only have this to mimic Angular 1's di that is limited only to string tokens. Otherwise we would use `ProxyService` class as the token
    //bind(Router).toValue(new RootRouter()),
    bind('ProxyService').toAlias(ProxyService)
];