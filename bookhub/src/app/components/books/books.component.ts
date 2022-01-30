import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Book } from 'src/app/Book';
import { BookService } from './book.service';
import {trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
//   animations: [
//     trigger('bodyExpansion', [
//       state('collapsed, void', style({height: '0px', visibility: 'hidden'})),
//       state('expanded', style({height: '*', visibility: 'visible'})),
//       transition('expanded <=> collapsed, void => collapsed', 
//       animate('225ms cubis-bezier(0.4, 0.0, 0.2, 1')),
//     ])
//   ]
})
export class BooksComponent implements OnInit {

  title='test';
  state='collapsed';

  books: Book[] = [];

  // @Input() book!: Book;
  // @Output() onClickInfo: EventEmitter<Book> = new EventEmitter();
  
  isExpanded: boolean = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  toggle(): void{
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
  }

  onClick(){//this will be some event binding
    //logic to show only the bookDescription if clicked on
    //also I want the card to be highlighted and show the bookDescription
    //as well as the title, author and img.
    //later this should be updated that is clicked again
    //the card reverts to the normal size it was.
    //return this.books;//should be as simple as this.books.bookDescription
  }

}
