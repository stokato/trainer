/**
 * Created by "s.t.o.k.a.t.o" on 21.02.2017.
 */

import {Component, OnInit} from "@angular/core";
import {WorkoutService} from "../../../services/workout.service";
import {WorkoutBuilderService} from "../../builder-services/workout-builder.service";
import {Exercise, ExercisePlan} from "../../../model";

const html = require('./left-nav-exercises.component.html');

@Component({
    selector: 'left-nav-exercises',
    template: html
})
export class LeftNavExercisesComponent implements OnInit {
    exerciseList: Array<Exercise> = [];

    constructor(
        public workoutService: WorkoutService,
        public workoutBuilderService: WorkoutBuilderService
    ) {}

    ngOnInit() {
        this.workoutService.getExercises()
            .subscribe(
                exerciseList => {
                    this.exerciseList = exerciseList;
                },
                (err: any) => console.error(err)
            );
    }

    addExercise(exercise: Exercise) {
        this.workoutBuilderService.addExercise(new ExercisePlan(exercise, 30));
    }
}