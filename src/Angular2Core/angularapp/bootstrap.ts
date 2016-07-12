/// <reference path="../typings/index.d.ts" />
import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import {AppComponent} from './app';
import { APP_ROUTER_PROVIDERS } from './app.routes';


bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS
]);