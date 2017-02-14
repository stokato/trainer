/**
 * Created by "s.t.o.k.a.t.o" on 14.02.2017.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FinishComponent} from "./finish.component/finish.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],
    declarations: [FinishComponent],
    exports: [FinishComponent]
})
export class FinishModule {}