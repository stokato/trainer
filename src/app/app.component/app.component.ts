/**
 * Created by Ruslan on 11.02.2017.
 */
import {Component, ViewContainerRef} from '@angular/core';
import {Overlay} from "angular2-modal";

const template = require('./app.component.html');

@Component({
    selector: 'trainer-app',
    template: template
})
export class AppComponent {
    name: string = 'World';

    constructor(overlay: Overlay, viewContainer: ViewContainerRef) {
        overlay.defaultViewContainer = viewContainer;
    }


}
