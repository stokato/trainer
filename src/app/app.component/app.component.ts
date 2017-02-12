/**
 * Created by Ruslan on 11.02.2017.
 */
import {Component} from '@angular/core';

const template = require('./app.component.html');

@Component({
    selector: 'trainer-app',
    template: template
})
export class AppComponent {
    name: string = 'World';

    constructor() {

    }


}
