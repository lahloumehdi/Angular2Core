import {Component} from '@angular/core';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AngularCoreService} from "./services/angularcore.service";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
        <nav>
          <a [routerLink]="['/app/dashboard']" routerLinkActive="active">Dashboard</a>
          <a [routerLink]="['/app/details']" routerLinkActive="active">Details</a>
        </nav>
    <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        AngularCoreService
    ]
})

export class AppComponent {
    title = 'Angular2 Core Bootstrap';
}

