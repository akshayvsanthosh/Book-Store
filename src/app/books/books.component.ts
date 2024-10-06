import { Component, Input } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  @Input() book:any;
  SERVER_URL:any="";

  constructor(private api: ApiService) { 
    this.SERVER_URL = api.server_url
  }
}
