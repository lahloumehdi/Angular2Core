import {Component} from '@angular/core';
import {HomeComponent} from './components/home.component';

@Component({
    selector: 'my-app',
    template: '<home></home>',
    directives: [HomeComponent]
})

export class AppComponent {

}