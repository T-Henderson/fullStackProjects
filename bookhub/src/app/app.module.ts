import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
//import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { BooksComponent } from './components/books/books.component';
//import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AboutComponent,
    FooterComponent,
    BestSellersComponent,
    BooksComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
