import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate } from '@angular/animations';
import { BOOKS } from 'src/app/book-list';
import { Book } from 'src/app/Book';
import { BookService } from '../books/book.service';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed, void => collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class BestSellersComponent implements OnInit {

  title='Best Seller';
  state='collapsed';

  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    //this is where the getBestSeller funciton should be called.
    //this should be here so it's called automatically on startup
    this.books = this.bookService.getBestSellers();
  }

  toggle(): void{
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';//sets the state equal to a ternary operator
  }

}
