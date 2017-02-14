/**
 * Created by "s.t.o.k.a.t.o" on 14.02.2017.
 */

import {Routes, RouterModule} from "@angular/router";
import {StartComponent} from "./start/start.component/start.component";
import {WorkoutRunnerComponent} from "./workout-runner/workout-runner.component/workout-runner.component";
import {FinishComponent} from "./fihish/finish.component/finish.component";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
    {
        path: 'start',
        component: StartComponent
    },
    {
        path: 'workout',
        component: WorkoutRunnerComponent
    },
    {
        path: 'finish',
        component: FinishComponent
    },
    {
        path: '**',
        redirectTo: '/start'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

// export const routedComponents = [ StartComponent, WorkoutRunnerComponent, FinishComponent ];