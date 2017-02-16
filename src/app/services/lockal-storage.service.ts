import {Injectable} from "@angular/core";
/**
 * Created by "s.t.o.k.a.t.o" on 15.02.2017.
 */

@Injectable()
export class LocalStorage {
    getItem<T>(key: string): T {
        if(localStorage[key]) {
            return <T>JSON.parse(localStorage[key]);
        }
        return null;
    }

    setItem(key: string, item: any) {
        localStorage[key] = JSON.stringify(item);
    }
}