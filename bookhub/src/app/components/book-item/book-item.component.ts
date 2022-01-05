import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/Book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() book!: Book;
  @Output() showBestSellers: EventEmitter<Book> = new EventEmitter();
  @Output() showNewArrivals: EventEmitter<Book> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onShowBestSellers(book: any) {
    if(book.bestSeller === true){
      this.showBestSellers.emit(book);
    }else{
      let errorMsg: string = 'Sorry! Something went in Best Sellers.'
      alert(errorMsg);
    }
    //this where the boolean logic for bestSeller goes
  }

  onShowNewArrivals(book: any) {
    //boolean logic for newArrivals
    if(book.newArrival === true){
      this.showNewArrivals.emit(book);
    }else {
      let errorMsg: string = 'Sorry! Something went wrong in New Arrivals.'
      alert(errorMsg);
    }
  }

}
