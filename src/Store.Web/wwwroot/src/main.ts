
import { bootstrap  } from '@angular/platform-browser-dynamic'; 
import { enableProdMode, bind ,provide } from '@angular/core'; 
import {LocationStrategy, HashLocationStrategy } from '@angular/common'; 
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

import { AppComponent , appRouterProviders, moviesInjectables} from './app/app'; 
 
 if (process.env.ENV === 'production') { 
   enableProdMode(); 
 } 

bootstrap(AppComponent, [ moviesInjectables, 
appRouterProviders,
HTTP_PROVIDERS, 
ROUTER_PROVIDERS,
provide(LocationStrategy, { useClass: HashLocationStrategy })]); 
