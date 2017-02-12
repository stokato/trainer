/**
 * Created by Ruslan on 12.02.2017.
 */

import { Component, OnInit } from '@angular/core';

import { WorkoutPlan, ExercisePlan, Exercise, ExerciseProgressEvent } from '../../services/model';

const template = require('./worcout-runner.component.html');

@Component({
    selector: 'workout-runner',
    template: template
})
export class WorkoutRunnerComponent {
    workoutPlan: WorkoutPlan;
    restExercise: ExercisePlan;
    workoutTimeRemaining: number;
    currentExerciseIndex: number;
    currentExercise: ExercisePlan;
    exerciseRunningDuration: number;

    constructor () {
        this.workoutPlan = this.buildWorkout();
        this.restExercise = new ExercisePlan(
            new Exercise("rest", "Relax!", "Relax a bit", "rest.png"),
            this.workoutPlan.restBetweenExercise
        )
    }

    buildWorkout(): WorkoutPlan {
        let workout = new WorkoutPlan(
            "7Min Workout",
            "7 Minute Workout", 10, []);

        workout.exercises.push(
            new ExercisePlan (
                new Exercise (
                    "jumpingJacks",
                    "Jumping Jacks",
                    "A jumping jack or star jump, also called side-straddle hop is a " +
                    "physical jumping exercise.",
                    "JumpingJacks.png",
                    "jumpingjacks.wav",
                    `Assume en erect position, with feet together and arms at your side. ...`,
                    ["dmYwZH_BNd0", "BAB(dj-2Z6o", "c4DAnQ6DtF8"]), 30
                )
            );

        return workout;
    }

    start () {
        console.log('started');

        this.workoutTimeRemaining = this.workoutPlan.totalWorkoutDuration();
        this.currentExerciseIndex = 0;

        this.startExercise(this.workoutPlan.exercises[this.currentExerciseIndex]);
    }

    startExercise ( exercisePlan: ExercisePlan ) {
        this.currentExercise = exercisePlan;
        this.exerciseRunningDuration = 0;

        let intervalId = setInterval (() => {
            if(this.exerciseRunningDuration >= this.currentExercise.duration) {
                clearInterval(intervalId);

                let next: ExercisePlan = this.getNextExercise();

                if(next) {
                    if(next !== this.restExercise) {
                        this.currentExerciseIndex++;
                    }

                    this.startExercise(next);
                } else {
                    console.log("Workout complete!");
                }
            }
            else { this.exerciseRunningDuration++; }
        }, 1000);
    }

    getNextExercise(): ExercisePlan {
        let nextExercise: ExercisePlan = null;

        if(this.currentExercise === this.restExercise) {
            nextExercise = this.workoutPlan.exercises[this.currentExerciseIndex + 1];
        } else if(this.currentExerciseIndex < this.workoutPlan.exercises.length - 1) {
            nextExercise = this.restExercise;
        }
        return nextExercise;
    }

    ngOnInit() {
        this.start();
    }
}