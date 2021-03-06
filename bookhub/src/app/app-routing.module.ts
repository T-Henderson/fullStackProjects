import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
//replace login component
import { BooksComponent } from './components/books/books.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';

const appRoutes: Routes = [
  {path:'', component: HomepageComponent},//this should redirect to homepage
  //replace path for login
  {path:'books', component: BooksComponent},
  {path: 'bestSellers', component: BestSellersComponent}
  //{path: 'about', component: AboutComponent}//uncommenting this will bring back about
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomepageComponent]