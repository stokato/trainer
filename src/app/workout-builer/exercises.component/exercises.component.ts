/**
 * Created by "s.t.o.k.a.t.o" on 21.02.2017.
 */

import {Component, OnInit} from "@angular/core";
import {Exercise} from "../../model";
import {Router} from "@angular/router";
import {WorkoutService} from "../../services/workout.service";

const html = require('./exercises.component.html');

@Component({
    selector: 'exercises',
    template: html
})
export class ExercisesComponent implements OnInit{
    public exerciseList: Array<Exercise> = [];

    constructor(
        private router: Router,
        private workoutService: WorkoutService
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

    onSelect(exercise: Exercise) {
        this.router.navigate([ './builder/exercise', exercise.name ]);
    }
}