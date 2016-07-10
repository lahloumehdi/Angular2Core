import {Component} from '@angular/core';
import {AngularCoreService} from "./../../services/angularcore.service";

@Component({
    selector: 'core-details',
    template: '<h3>My details</h3>',

})
export class CoreDetailsComponent {

    constructor(private _angularCoreService: AngularCoreService) {

    }

}