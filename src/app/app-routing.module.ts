import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { PublishBookComponent } from './publish-book/publish-book.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './Guards/auth.guard';
import { MyBooksComponent } from './my-books/my-books.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"books",canActivate:[authGuard],component:ViewBooksComponent},
  {path:"publish",canActivate:[authGuard],component:PublishBookComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"myBook",canActivate:[authGuard],component:MyBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
