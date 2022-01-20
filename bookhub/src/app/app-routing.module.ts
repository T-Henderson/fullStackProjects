import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';

export const appRoutes: Routes = [
  {path:'', component: HomepageComponent},//this should redirect to homepage
  //{path:'/login', component: LoginComponent}//adding this makes the page go blank. Why?
  //{path: 'about', component: AboutComponent}//uncommenting this will bring back about
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
