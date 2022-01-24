import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { BOOKS } from '../book-list';
import { BookService } from '../services/book.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

}
