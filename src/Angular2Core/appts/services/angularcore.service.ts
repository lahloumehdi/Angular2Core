import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class AngularCoreService {

    private avrUrl = 'api';  // URL to web api

    constructor(private http: Http) {

    }

    getData(id: number): Promise<string[]> {
        var data = localStorage.getItem('data');
        return Promise.resolve(["toto", data]);
    }

    storeData(json: string): Promise<string[]> {
        localStorage.setItem('data', json);
        return Promise.resolve(["toto", "titi"]);
    }
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}