/**
 * Created by Ruslan on 12.02.2017.
 */

export class Exercise {
    constructor (
        public name: string,
        public title: string,
        public description: string,
        public image: string,
        public nameSound?: string,
        public procedure?: string,
        public videos?: Array<string>
    ) {}
}

export class WorkoutPlan {
    constructor (
       public name: string,
       public title: string,
       public restBetweenExercise: number,
       public exercises: ExercisePlan[],
       public description?: string
    ) {}

    totalWorkoutDuration(): number {
        if (!this.exercises) {
            return 0;
        }

        let total = this.exercises
            .map((e) => e.duration)
            .reduce((previous, current) => parseInt(String(previous)) + parseInt(String(current)));

        return ((this.restBetweenExercise ? this.restBetweenExercise : 0) * (this.exercises.length - 1)) + total;
    }
}

export class ExercisePlan {
    constructor (
       public exercise: Exercise,
       public duration: number
    ) {}
}

export class ExerciseProgressEvent {
    constructor (
       public exercise: ExercisePlan,
       public runnerFor: number,
       public timeRemaining: number,
       public workoutTimeRemaining: number
    ) {}
}

export class ExerciseChangeeEvent {
    constructor (
       public current: ExercisePlan,
       public next: ExercisePlan
    ) {}
}