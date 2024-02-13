import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class H_AContacts {
    conf:any = require('./conf.json');
    constructor(private http: HttpClient){
        this.getContacts();
    }

    getContacts(){
        console.log(`${this.conf.url}/contacts`)
        return this.http.get(`${this.conf.url}/contacts`, this.createHeader(this.conf.token));
    }

    test(){
        let token = "D634150963FF1147C75D734042CACE6A";
        return this.http.get(`https://procesos.inmovilla.com/api/v1/propiedades/?listado/contacts`, this.createHeader(token));
    }


    private createHeader(token:string) {

        const header = {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'key': token
        }
        return {headers: new HttpHeaders(header)};
    }

}