import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BooksComponent } from './components/books/books.component';

const appRoutes: Routes = [
  {path:'', component: HomepageComponent},//this should redirect to homepage
  //{path: 'about', component: AboutComponent}//uncommenting this will bring back about
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    FooterComponent,
    BookItemComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
