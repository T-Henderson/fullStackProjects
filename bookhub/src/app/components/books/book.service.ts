import { Injectable } from '@angular/core';
import { Book } from 'src/app/Book';
import { BOOKS } from 'src/app/book-list';
import { Observable } from 'rxjs';
import { BooksComponent } from './books.component';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[]=[];

  constructor() { }

  //***ALL METHODS BELOW WILL BE REWRITTEN IN ORDER TO ACCESS THE JSON SERVER API***

  getBooks(): Book[]{//needs to become an observable, eventually
    return BOOKS;
  }

  getBestSellers(): any{//this method will be rewritten to access JSON server
    const filtered = BOOKS.filter((object)=>{
      return object.bestSeller === true;
    });
    console.log(filtered);
  }

  // //need a method to get best sellers
  // getBestSellers(): any{//need a better return type but this will do
  //   let books: BOOKS;
  //   if(books.bestSeller )
  //   /*maybe have a for loop for books in Book
  //     if books.bestSeller == true
  //       return that book
  //   */
  // }

  //create new method to get book by description
  getBookDescription(): any{//need to change the return type at some point
    //let book: Book[] = []
    
    
  }
}
