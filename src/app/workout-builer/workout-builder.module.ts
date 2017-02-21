/**
 * Created by "s.t.o.k.a.t.o" on 21.02.2017.
 */

import {NgModule} from "@angular/core";
import {WorkoutBuilderComponent} from "./workout-builder.component/workout-builder.component";
import {CommonModule} from "@angular/common";
import {workoutBuilderRouting} from "./workout-builder.routes";
import {WorkoutComponent} from "./workout.component/workout.component";
import {WorkoutsComponent} from "./workouts.component/workotus.component";
import {ExerciseComponent} from "./exercise.component/exercise.component";
import {ExercisesComponent} from "./exercises.component/exercises.component";
import {LeftNavExercisesComponent} from "./navigation/left-nav-exercises.component/left-nav-exercises.component";
import {LeftNavMainComponent} from "./navigation/left-nav-main.component/left-nav-main.component";
import {SubNavComponent} from "./navigation/sub-nav.component/sub-nav.component";
import {PipesModule} from "../pipes/pipes.module";
import {WorkoutBuilderService} from "./builder-services/workout-builder.services";

@NgModule({
    imports: [
      CommonModule,
      workoutBuilderRouting,
      PipesModule
    ],
    declarations: [
        WorkoutBuilderComponent,
        WorkoutComponent,
        WorkoutsComponent,
        ExerciseComponent,
        ExercisesComponent,
        LeftNavExercisesComponent,
        LeftNavMainComponent,
        SubNavComponent
    ],
    providers: [
       WorkoutBuilderService
    ],
    exports: [
        WorkoutBuilderComponent
    ]
})
export class WorkoutBuilderModule {}