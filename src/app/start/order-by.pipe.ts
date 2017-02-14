/**
 * Created by "s.t.o.k.a.t.o" on 14.02.2017.
 */


import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform{
    transform(value: Array<any>, args: any[]): any {
        let field: string = args[0];

        if(value == null) {
            return null;
        }

        if(field.startsWith("-")) {
            field = field.substring(1);

            if(typeof value[field] === 'string' || value[field] instanceof String) {
                return [...value].sort((a, b) => b[field].localeCompare(a[field]))
            }

            return [...value].sort((a, b) => b[field] - a[field]);
        } else {

            if(typeof value[field] === 'string' || value[field] instanceof String) {
                return [...value].sort((a, b) => -b[field].localeCompare(a[field]));
            }

            return [...value].sort((a, b) => a[field] - b[field]);
        }
    }
}