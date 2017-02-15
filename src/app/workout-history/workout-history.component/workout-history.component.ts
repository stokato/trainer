/**
 * Created by "s.t.o.k.a.t.o" on 15.02.2017.
 */

import {Component} from "@angular/core";
import {WorkoutLogEntry, WorkoutHistoryTracker} from "../../services/workout-history-tracker.service";
import {Location} from "@angular/common";

const template = require('./workout-history.component.html');

@Component({
    selector: 'workout-history',
    template: template
})
export class WorkoutHistoryComponent {
    history: Array<WorkoutLogEntry> = [];
    completed: boolean;

    constructor(
        private tracker: WorkoutHistoryTracker,
        private location: Location
    ) {}

    ngOnInit() {
        this.history = this.tracker.getHistory();
    }

    goBack() {
        this.location.back();
    }
}