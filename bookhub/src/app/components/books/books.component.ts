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

  onClick(){
    return alert("This works!");
  }

}
