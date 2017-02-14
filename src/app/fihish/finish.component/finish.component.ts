/**
 * Created by "s.t.o.k.a.t.o" on 14.02.2017.
 */

import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

const template = require('./finish.component.html');
const css      = require('./finish.component.css');

@Component({
    selector: 'finish',
    template: template,
    styles: [ css ]
})
export class FinishComponent implements OnInit, OnDestroy {
    private workoutName: string;
    private sub: any;

    constructor(private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.workoutName = params['id'];
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}