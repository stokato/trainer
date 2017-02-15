/**
 * Created by "s.t.o.k.a.t.o" on 15.02.2017.
 */

import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {PipesModule} from "../pipes/pipes.module";
import {WorkoutHistoryTracker} from "../services/workout-history-tracker.service";
import {WorkoutHistoryComponent} from "./workout-history.component/workout-history.component";


@NgModule({
    imports: [
        BrowserModule,
        PipesModule
    ],
    declarations: [ WorkoutHistoryComponent ],
    providers: [],
    exports: [ WorkoutHistoryComponent ]
})
export class WorkoutHistoryModule {}