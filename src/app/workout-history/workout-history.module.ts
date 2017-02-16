/**
 * Created by "s.t.o.k.a.t.o" on 15.02.2017.
 */

import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {PipesModule} from "../pipes/pipes.module";
import {WorkoutHistoryComponent} from "./workout-history.component/workout-history.component";
import {ServicesModule} from "../services/services.module";


@NgModule({
    imports: [
        BrowserModule,
        PipesModule,
        ServicesModule
    ],
    declarations: [ WorkoutHistoryComponent ],
    providers: [],
    exports: [ WorkoutHistoryComponent ]
})
export class WorkoutHistoryModule {}