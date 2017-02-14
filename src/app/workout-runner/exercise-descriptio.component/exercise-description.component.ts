/**
 * Created by "s.t.o.k.a.t.o" on 14.02.2017.
 */

import {Component, Input} from "@angular/core";

const template = require('./exercise-description.component.html');

@Component({
    selector: 'exercise-description',
    template: template
})
export class ExerciseDescriptionComponent {
    @Input() description: string;
    @Input() steps: string;
}