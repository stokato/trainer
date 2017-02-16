import {Exercise, ExercisePlan} from "../model";
import {LocalStorage} from "./lockal-storage.service";
import {Injectable} from "@angular/core";
/**
 * Created by "s.t.o.k.a.t.o" on 15.02.2017.
 */

// @Injectable()
export class WorkoutHistoryTracker {
    private maxHistoryItems: number = 20;
    private currentWorkoutLog: WorkoutLogEntry = null;
    private workoutHistory: Array<WorkoutLogEntry> = [];
    private workoutTracked: boolean;
    private storage: LocalStorage;
    private storageKey: string = "workouts";

    constructor() {
        this.storage = new LocalStorage();

        this.workoutHistory = (this.storage.getItem<Array<WorkoutLogEntry>>(this.storageKey) || [])
            .map((item: WorkoutLogEntry) => {
                item.startedOn = new Date(item.startedOn.toString());
                item.endedOn = item.endedOn == null ? null : new Date(item.endedOn.toString());

                return item;
            })
    }

    get tracking(): boolean {
        return this.workoutTracked;
    }

    startTracking() {
        this.workoutTracked = true;
        this.currentWorkoutLog = new WorkoutLogEntry(new Date());

        if(this.workoutHistory.length >= this.maxHistoryItems) {
            this.workoutHistory.shift();
        }

        this.workoutHistory.push(this.currentWorkoutLog);
        this.storage.setItem(this.storageKey, this.workoutHistory);
    }

    exerciseComplete(exercise: ExercisePlan) {

        if(!this.currentWorkoutLog) {
            return;
        }

        this.currentWorkoutLog.lastExercise = exercise.exercise.title;
        ++this.currentWorkoutLog.exercisesDone;

        this.storage.setItem(this.storageKey, this.workoutHistory);
    }

    endTracking(completed: boolean) {
        if(this.workoutTracked) {
            this.currentWorkoutLog.completed = completed;
            this.currentWorkoutLog.endedOn = new Date();
            this.currentWorkoutLog = null;
            this.workoutTracked = false;

            this.storage.setItem(this.storageKey, this.workoutHistory);
        }
    }

    getHistory(): Array<WorkoutLogEntry> {
        return this.workoutHistory;
    }
}

export class WorkoutLogEntry {
    constructor(
        public startedOn: Date,
        public completed: boolean = false,
        public exercisesDone: number = 0,
        public lastExercise? : string,
        public endedOn?: Date
    ) {}
}