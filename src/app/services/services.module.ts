/**
 * Created by "s.t.o.k.a.t.o" on 15.02.2017.
 */

import {NgModule} from "@angular/core";
import {LocalStorage} from "./lockal-storage.service";
import {WorkoutService} from "./workout.service";
import {WorkoutHistoryTracker} from "./workout-history-tracker.service";

@NgModule({
    imports: [],
    declarations: [],
    providers: [
        LocalStorage,
        WorkoutService,
        WorkoutHistoryTracker
    ]
})
export class ServicesModule{}