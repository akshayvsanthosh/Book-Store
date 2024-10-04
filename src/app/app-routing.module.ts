import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { PublishBookComponent } from './publish-book/publish-book.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"books",component:ViewBooksComponent},
  {path:"publish",component:PublishBookComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
