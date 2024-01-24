import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class H_AContacts {
    conf:any = require('./conf.json');
    constructor(private http: HttpClient){}

    getContacts(){
        console.log(`${this.conf.url}/contacts`)
        return this.http.get(`${this.conf.url}/contacts`, this.createHeader());
    }



    private createHeader() {

        const header = {
            'Accept':'application/json',
            'Key': this.conf.token
        }
        return {headers: new HttpHeaders(header)};
    }

}