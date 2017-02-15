/**
 * Created by "s.t.o.k.a.t.o" on 15.02.2017.
 */

import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(value: Array<any>, field: string, searchTerm: string): any {
        if(!field) {
            return [];
        }

        if(searchTerm == null || searchTerm.length === 0) {
            return [...value];
        }

        let results = value.filter(item => {
            item[field] === searchTerm;
        });

        return results.length === 0? null : results;
    }
}