/**
 * Created by "s.t.o.k.a.t.o" on 14.02.2017.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {StartComponent} from "./start.component/start.component";
import {OrderByPipe} from "./order-by.pipe";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        // SharedModule
    ],
    declarations: [
        StartComponent,
        OrderByPipe
    ],
    exports: [StartComponent]
})
export class StartModule {}