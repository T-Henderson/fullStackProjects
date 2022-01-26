import { HttpClient } from '@angular/common/http';
import {ElementRef, Injectable} from '@angular/core';
//import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

import { Login } from './login';
import { LOGIN } from './login-list';

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    userName = '';
    loginElement!: ElementRef;
    welcomeElement!: ElementRef;

    constructor(private http: HttpClient){}

    getUsers(): Login[] {
        return LOGIN;
    }
}