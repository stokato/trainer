/**
 * Created by "s.t.o.k.a.t.o" on 20.02.2017.
 */

import {Component, ViewChild, forwardRef, Inject} from "@angular/core";
import {MyAudioDirective} from "../my-audio.directive";
import {ExerciseProgressEvent, ExerciseChangeeEvent, ExercisePlan} from "../../../model";
// import {WorkoutRunnerComponent} from "../../workout-runner.component/workout-runner.component";

const template = require('./workout-audio.component.html');

@Component({
    selector: 'workout-audio',
    template: template
})
export class WorkoutAudioComponent {
    @ViewChild('ticks') private ticks: MyAudioDirective;
    @ViewChild('nextUp') private nextUp: MyAudioDirective;
    @ViewChild('nextExercise') private nextUpExercise: MyAudioDirective;
    @ViewChild('halfway') private halfway: MyAudioDirective;
    @ViewChild('aboutToComplete') private aboutToComplete: MyAudioDirective;

    private nextupSound: string;
    // private subscriptions: Array<any>;

    constructor( /* @Inject(forwardRef(() => WorkoutRunnerComponent))
                 private runner: WorkoutRunnerComponent */) {

/*        this.subscriptions = [
            this.runner.exercisePaused.subscribe((exercise: ExercisePlan) => {
                this.stop();
            }),
            this.runner.workoutComplete.subscribe((exercise: ExercisePlan) => {
                this.stop();
            }),
            this.runner.exerciseResumed.subscribe((exercise: ExercisePlan) => {
                this.resume();
            }),
            this.runner.exerciseProgress.subscribe((progress: ExerciseProgressEvent) => {
                this.onExerciseProgress(progress);
            }),
            this.runner.exerciseChanged.subscribe((state: ExerciseChangeeEvent) => {
                this.onExerciseChanged(state);
            })
        ]*/
    }

    stop() {
        this.ticks.stop();
        this.nextUp.stop();
        this.halfway.stop();
        this.aboutToComplete.stop();
        this.nextUpExercise.stop();
    }

    resume() {
        this.ticks.start();

        if (this.nextUp.currentTime > 0 && !this.nextUpExercise.playbackComplete) {
            this.nextUpExercise.start();
        } else if (this.halfway.currentTime > 0 && !this.halfway.playbackComplete) {
            this.halfway.start();
        } else if (this.aboutToComplete.currentTime > 0 && !this.aboutToComplete.playbackComplete) {
            this.aboutToComplete.start();
        }
    }

    onExerciseProgress(progress: ExerciseProgressEvent) {
        if(progress.runnerFor == Math.floor(progress.exercise.duration / 2)
            && progress.exercise.exercise.name != "rest") {
            this.halfway.start();
        } else if(progress.timeRemaining == 3) {
            this.aboutToComplete.start();
        }
    }

    onExerciseChanged(state: ExerciseChangeeEvent) {
        if(state.current.exercise.name == "reset") {
            this.nextupSound = state.next.exercise.nameSound;

            setTimeout(() => this.nextUp.start(), 2000);
            setTimeout(() => this.nextUpExercise.start(), 3000);
        }
    }


    ngAfterViewInit() {
        this.ticks.start();
    }

    ngOnDestroy() {
        // this.subscriptions.forEach((s) => s.unsubscribe());
    }
}