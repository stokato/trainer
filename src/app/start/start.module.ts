/**
 * Created by "s.t.o.k.a.t.o" on 14.02.2017.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {StartComponent} from "./start.component/start.component";
import {OrderByPipe} from "../pipes/order-by.pipe";
import {SearchPipe} from "../pipes/search.pipe";
import {SecondsToTimePipe} from "../pipes/seconds-to-time.pipe";
import {PipesModule} from "../pipes/pipes.module";
import {HttpModule} from "@angular/http";
import {ServicesModule} from "../services/services.module";

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        PipesModule,
        ServicesModule
        // SharedModule
    ],
    declarations: [
        StartComponent,
        // OrderByPipe,
        // SearchPipe,
        // SecondsToTimePipe
    ],
    exports: [StartComponent]
})
export class StartModule {}