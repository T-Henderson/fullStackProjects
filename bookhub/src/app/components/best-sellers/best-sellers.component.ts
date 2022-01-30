import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate } from '@angular/animations';


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

  title='test';
  state='collapsed';

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void{
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
  }

}
