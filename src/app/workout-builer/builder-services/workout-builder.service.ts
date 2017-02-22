/**
 * Created by "s.t.o.k.a.t.o" on 21.02.2017.
 */


import {Injectable} from "@angular/core";
import {WorkoutPlan, ExercisePlan} from "../../model";
import {WorkoutService} from "../../services/workout.service";

@Injectable()
export class WorkoutBuilderService {
    buildingWorkout: WorkoutPlan;
    newWorkout: boolean;
    firstExercise: boolean = true;
    _workoutService: WorkoutService

    constructor(public workoutService: WorkoutService) {}

    startBuildingNew(name: string) {
        let exerciseArray: ExercisePlan[] = [];

        this.buildingWorkout = new WorkoutPlan("", "", 30, exerciseArray);
        this.newWorkout = true;

        return this.buildingWorkout;
    }

    startBuildingExisting(name: string) {
        this.newWorkout = false;

        return this.workoutService.getWorkout(name);
    }

    removeExercise(exercise: ExercisePlan) {
        let currentIndex = this.buildingWorkout.exercises
            .map(e => {
                return e.exercise.name;
            })
            .indexOf(exercise.exercise.name);

        this.buildingWorkout.exercises.splice(currentIndex, 1);
    }

    addExercise(exercisePlan: ExercisePlan) {
        if(this.newWorkout && this.firstExercise) {
            this.buildingWorkout.exercises.splice(0, 1);
            this.firstExercise = false;
        }
        this.buildingWorkout.exercises.push(exercisePlan);
    }

    moveExerciseTo(exercise: ExercisePlan, toIndex: number) {
        if(toIndex < 0 || toIndex >= this.buildingWorkout.exercises.length) {
            return;
        }

        let currentIndex = this.buildingWorkout.exercises.indexOf(exercise);
        this.buildingWorkout.exercises
            .splice(toIndex, 0, this.buildingWorkout.exercises
                .splice(currentIndex, 1)[0]);
    }

    save() {
        let workout = this.newWorkout ?
            this.workoutService.addWorkout(this.buildingWorkout) :
            this.workoutService.updateWorkout(this.buildingWorkout);
        this.newWorkout = false;

        return workout;
    }
}