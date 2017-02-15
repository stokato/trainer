import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {OrderByPipe} from "./order-by.pipe";
import {SearchPipe} from "./search.pipe";
import {SecondsToTimePipe} from "./seconds-to-time.pipe";
/**
 * Created by "s.t.o.k.a.t.o" on 15.02.2017.
 */

@NgModule({
    imports: [BrowserModule],
    declarations: [OrderByPipe, SearchPipe, SecondsToTimePipe],
    exports: [OrderByPipe, SearchPipe, SecondsToTimePipe]
})
export class PipesModule { }