/**
 * Created by Ruslan on 11.02.2017.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component/app.component';
import { WorkoutRunnerComponent } from './workout-runner/workout-runner.component/workout-runner.component';
import { WorkoutRunnerModule } from './workout-runner/workout-runner.module';
import {StartModule} from "./start/start.module";
import {FinishModule} from "./fihish/finish.module";
import {routing} from "./app.routes";

// import { routing, routedComponents } from './routes';

@NgModule({
    imports: [
        BrowserModule,
        WorkoutRunnerModule,
        StartModule,
        FinishModule,
        routing
    ],
    declarations: [
        AppComponent//,
        // TabContent,
        // TechnologicalTabComponent,
        // AdvancedTabComponent,
        // WindowComponent,
        // SWFComponent,
        // routedComponents
    ],
    // providers: [AuthGuard, UserService],
    bootstrap: [AppComponent]
})
export class AppModule {}