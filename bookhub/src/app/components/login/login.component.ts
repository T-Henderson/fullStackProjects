import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule,Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/login']);//brings back the page. However, it's stuck on the homepage. the
    //auot generated login works isn't showing up
  }

}
