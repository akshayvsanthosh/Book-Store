import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { PublishBookComponent } from './publish-book/publish-book.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"books",component:ViewBooksComponent},
  {path:"publish",component:PublishBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
