import {Component} from '@angular/core';
import {AngularCoreService} from "./../services/angularcore.service";

@Component({
    selector: 'home',
    template: '<h3>My First Angular 2 App</h3>',

})
export class HomeComponent {

    constructor(private _angularCoreService: AngularCoreService) {

    }

}