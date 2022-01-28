import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Book';
import { BookService } from './book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  onClick(){//this will be some event binding
    //logic to show only the bookDescription if clicked on
    return this.bookService.getBookByDescription()
    //also I want the card to be highlighted and show the bookDescription
    //as well as the title, author and img.
    //later this should be updated that is clicked again
    //the card reverts to the normal size it was.
    //return this.books;//should be as simple as this.books.bookDescription
  }

}
