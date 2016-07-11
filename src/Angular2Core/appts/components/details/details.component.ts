import {Component} from '@angular/core';
import {AngularCoreService} from "./../../services/angularcore.service";

@Component({
    selector: 'core-details',
    template: `<h3>My details</h3>
               <div cmp *ngFor="let t of todos; let i=index">{{t.name}}</div>`,

})
export class CoreDetailsComponent {
    todos: Angular2Core.Models.Todo[];

    constructor(private _angularCoreService: AngularCoreService) {

        _angularCoreService.getAll().then((res) => {
            this.todos = res;
        });
    }

}