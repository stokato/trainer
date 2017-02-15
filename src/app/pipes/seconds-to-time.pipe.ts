/**
 * Created by "s.t.o.k.a.t.o" on 14.02.2017.
 */

import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: 'secondsToTime'
})
export class SecondsToTimePipe implements PipeTransform {

    transform (value: number): any {
        if (!isNaN(value)) {
            let hours   = Math.floor(value / 3600);
            let minutes = Math.floor((value - (hours * 3600)) / 60);
            let seconds = value - (hours * 3600) - (minutes * 60);

            return ("0" + hours).substr(-2) + ':'
                 + ("0" + minutes).substr(-2) + ':'
                 + ("0" + seconds).substr(-2);
        }

        return;
    }
}
