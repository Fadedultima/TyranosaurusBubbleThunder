import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ICerebra } from './cerebra';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class CerebraService {
    private _cerebraUrl = 'api/cerebras/cerebras.json';

    constructor(private _http: Http){
        
    }

    getCerebras(): Observable<ICerebra[]> {
        return this._http.get(this._cerebraUrl)
            .map((response: Response) => <ICerebra[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)));
    }

}