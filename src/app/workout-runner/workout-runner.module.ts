/**
 * Created by "s.t.o.k.a.t.o" on 14.02.2017.
 */


import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {WorkoutRunnerComponent} from "./workout-runner.component/workout-runner.component";
import {ExerciseDescriptionComponent} from "./exercise-descriptio.component/exercise-description.component";
import {VideoPlayerComponent} from "./video-player.component/video-player.component";
import {SecondsToTimePipe} from "./seconds-to-time.pipe";


@NgModule({
    imports: [ BrowserModule ],
    declarations: [
        WorkoutRunnerComponent,
        ExerciseDescriptionComponent,
        VideoPlayerComponent,
        SecondsToTimePipe
    ],
    exports: [ WorkoutRunnerComponent ]
})
export class WorkoutRunnerModule {}

