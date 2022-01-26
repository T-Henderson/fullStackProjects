import { Injectable } from '@angular/core';
import { Book } from 'src/app/Book';
import { BOOKS } from 'src/app/book-list';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Book[]{
    return BOOKS;
  }
}
