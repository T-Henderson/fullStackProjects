import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Book } from '../Book';
import { BOOKS } from '../book-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  //private apiUrl = 'http://localhost:5000/';//add full thing later or maybe remove

  constructor() { }//don't put httpclient here yet because it screws up homepage. 
  //books do not show.

  getBooks(): Book[] {//need to add observable here. can then use subscribe in books component
    return BOOKS;
  }
}
