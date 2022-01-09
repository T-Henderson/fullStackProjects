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

  /*place above functions within the HTML for this component later or tomorrow.
  Use the TaskTracker app as a guide to do so. Hopefully this works as intended.
  A potential snag might be if both newArrival and bestSeller are true, they would show 
  up regardless of section. Though it shouldn't be too much of a problem. 
  */
}
