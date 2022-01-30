import { Injectable } from '@angular/core';
import { Book } from 'src/app/Book';
import { BOOKS } from 'src/app/book-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Book[]{//needs to become an observable, eventually
    return BOOKS;
  }

  //create new method to get book by description
  getBookDescription(): any{//need to change the return type at some point
    let book: Book[] = []
    
    
  }
}
