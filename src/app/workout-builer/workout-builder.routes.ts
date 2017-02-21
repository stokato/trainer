/**
 * Created by "s.t.o.k.a.t.o" on 21.02.2017.
 */

import {Routes, RouterModule} from "@angular/router";
import {WorkoutBuilderComponent} from "./workout-builder.component/workout-builder.component";
import {ModuleWithProviders} from "@angular/core";
import {WorkoutsComponent} from "./workouts.component/workotus.component";
import {WorkoutComponent} from "./workout.component/workout.component";
import {ExercisesComponent} from "./exercises.component/exercises.component";
import {ExerciseComponent} from "./exercise.component/exercise.component";
import {WorkoutGuard} from "./workout.component/workout.quard";

export const workoutBuilderRoutes: Routes = [
    {
        path: 'builder',
        component: WorkoutBuilderComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'workouts'
            },
            // {
            //     path: 'builder',
            //     loadChildren: '/src/app/workout-builder/workout-builder.module#WorkoutBuilderModule'
            // },
            {
                path: 'workouts',
                component: WorkoutsComponent
            },
            {
                path: 'workout/new',
                component: WorkoutComponent
            },
            {
                path: 'workout/:id',
                component: WorkoutComponent,
                canActivate: [WorkoutGuard]
            },
            {
                path: 'exercises',
                component: ExercisesComponent
            },
            {
                path: 'exercises/new',
                component: ExerciseComponent
            },
            {
                path: 'exercise/:id',
                component: ExerciseComponent
            }
        ]
    }
];

export const workoutBuilderRouting: ModuleWithProviders =
    RouterModule.forChild(workoutBuilderRoutes);