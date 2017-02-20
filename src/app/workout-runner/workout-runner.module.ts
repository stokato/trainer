/**
 * Created by "s.t.o.k.a.t.o" on 14.02.2017.
 */


import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {WorkoutRunnerComponent} from "./workout-runner.component/workout-runner.component";
import {ExerciseDescriptionComponent} from "./exercise-descriptio.component/exercise-description.component";
import {VideoPlayerComponent} from "./video-player.component/video-player.component";
import {PipesModule} from "../pipes/pipes.module";
import {WorkoutHistoryTracker} from "../services/workout-history-tracker.service";
import {ServicesModule} from "../services/services.module";
import {VideoDialogComponent} from "./video-dialog.component/video-dialog.component";
import {MyAudioDirective} from "./workout-audio/my-audio.directive";
import {WorkoutAudioComponent} from "./workout-audio/workout-audio.component/workout-audio.component";


@NgModule({
    imports: [ BrowserModule, PipesModule, ServicesModule ],
    declarations: [
        WorkoutRunnerComponent,
        ExerciseDescriptionComponent,
        VideoPlayerComponent,
        VideoDialogComponent,
        MyAudioDirective,
        WorkoutAudioComponent
    ],
    providers: [WorkoutHistoryTracker],
    exports: [ WorkoutRunnerComponent ],
    entryComponents: [VideoDialogComponent]
})
export class WorkoutRunnerModule {}

