/**
 * Created by "s.t.o.k.a.t.o" on 22.02.2017.
 */

import {FormControl} from "@angular/forms";

export class AlphaNumericValidator {
    static invalidAlphaNumeric(control: FormControl): { [key: string]: boolean } {
        if(control.value.length && !control.value.match(/^[a-z0-9]+$/i)) {
            return {invalidAlphaNumeric: true};
        }
        return null;
    }
}