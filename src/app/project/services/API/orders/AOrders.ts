import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class AOrders {
    conf = require('../conf.json');
    url = this.conf.url;
    constructor(private http: HttpClient){}

    /************
     * GETS
    ************/
    getOrders():Observable<any>{
        return this.http.get(`${this.url}/orders`, this.createHeader());
    }

    /************
     * POSTS
    ************/
    putOrder(order:any):Observable<any> {
        return this.http.post(`${this.url}/orders`, order, this.createHeader());
    }


    private createHeader() {

        const header = {
            'Access-Control-Allow-Origin':'*',
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Acces-Control-Allow-Headers':'Origin, Content-Type, Accept,Authorization'
        }
        return {headers: new HttpHeaders(header)};
    }

}