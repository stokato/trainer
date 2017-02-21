/**
 * Created by "s.t.o.k.a.t.o" on 21.02.2017.
 */

import {Component, OnInit} from "@angular/core";
import {WorkoutPlan} from "../../model";
import {Router} from "@angular/router";
import {WorkoutService} from "../../services/workout.service";

const html = require('./workouts.component.html');

@Component({
    selector: 'workouts',
    template: html
})
export class WorkoutsComponent implements OnInit{
    workoutList: Array<WorkoutPlan> = [];

    constructor (
        public router: Router,
        public workoutService: WorkoutService
    ) {}

    onSelect(workout: WorkoutPlan) {
        this.router.navigate([ './builder/workout', workout.name ]);
    }

    ngOnInit() {
        this.workoutList = this.workoutService.getWorkouts();
    }
}