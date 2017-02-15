/**
 * Created by "s.t.o.k.a.t.o" on 15.02.2017.
 */

import {Component} from "@angular/core";
import {Router} from "@angular/router";

const template = require('./header.component.html');

@Component({
    selector: 'header',
    template: template
})
export class HeaderComponent {
    showHistoryLink: boolean = true;
    private  subscription: any;

    constructor(private router: Router) {
        this.router.events.subscribe((data: any) => {
            this.showHistoryLink = !this.router.url.startsWith('/workout');
        });
    }
}