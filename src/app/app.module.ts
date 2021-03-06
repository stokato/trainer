/**
 * Created by Ruslan on 11.02.2017.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component/app.component';
import { WorkoutRunnerModule } from './workout-runner/workout-runner.module';
import {StartModule} from "./start/start.module";
import {FinishModule} from "./fihish/finish.module";
import {routing} from "./app.routes";
import {WorkoutHistoryModule} from "./workout-history/workout-history.module";
import {WorkoutHistoryTracker} from "./services/workout-history-tracker.service";
import {HeaderComponent} from "./header.component/header.component";
import {ModalModule} from "angular2-modal";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";
import {ServicesModule} from "./services/services.module";
import {WorkoutBuilderModule} from "./workout-builer/workout-builder.module";

@NgModule({
    imports: [
        BrowserModule,
        WorkoutRunnerModule,
        StartModule,
        FinishModule,
        WorkoutHistoryModule,
        routing,
        ModalModule.forRoot(),
        ServicesModule,
        BootstrapModalModule,
        WorkoutBuilderModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}