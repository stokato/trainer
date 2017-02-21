/**
 * Created by "s.t.o.k.a.t.o" on 14.02.2017.
 */

import {Routes, RouterModule} from "@angular/router";
import {StartComponent} from "./start/start.component/start.component";

import {FinishComponent} from "./fihish/finish.component/finish.component";
import {ModuleWithProviders} from "@angular/core";
import {WorkoutHistoryComponent} from "./workout-history/workout-history.component/workout-history.component";
import {WorkoutContainerComponent} from "./workout-runner/workout-container.component/workout-container.component";
import {WorkoutBuilderComponent} from "./workout-builer/workout-builder.component/workout-builder.component";

export const routes: Routes = [
    {
        path: 'start',
        component: StartComponent
    },
    {
        path: 'workout',
        component: WorkoutContainerComponent
    },
    {
        path: 'finish',
        component: FinishComponent
    },
    {
        path: 'history',
        component: WorkoutHistoryComponent
    },
    {
        path: 'builder',
        component: WorkoutBuilderComponent
    },
    // ...workoutBuilderRoutes,
    {
        path: '**',
        redirectTo: '/start'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

// export const routedComponents = [ StartComponent, WorkoutRunnerComponent, FinishComponent ];