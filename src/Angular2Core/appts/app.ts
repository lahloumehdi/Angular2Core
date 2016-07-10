import {Component} from '@angular/core';
import {HomeComponent} from './components/home.component';
import {AngularCoreService} from "./services/angularcore.service";

@Component({
    selector: 'my-app',
    template: '<home></home>',
    directives: [HomeComponent],
    providers: [
        AngularCoreService
    ]
})

export class AppComponent {

}