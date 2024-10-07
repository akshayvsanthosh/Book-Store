import { Component, Input } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  @Input() book:any;
  SERVER_URL:any="";

  constructor(private api: ApiService,private http: HttpClient) { 
    this.SERVER_URL = api.server_url
  }

  downloadBook(bookFileName: any) {
    const fileUrl = `${this.SERVER_URL}/uploads/${bookFileName}`;

    this.http.get(fileUrl, { responseType: 'blob' }).subscribe({
      next: (blob) => {
        saveAs(blob, bookFileName); // Save the file using FileSaver.js
      },
      error: (error) => {
        // Handle error (file not found, etc.)
        alert('Error downloading the file. Please try again later.');
        console.error(error);
      }
    });
}
}
