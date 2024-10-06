import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit{
  allBooks:any=[]
  
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getAllBooks()
  }

  getAllBooks(){
    this.api.getAllBooksAPI().subscribe((result:any)=>{
      this.allBooks=result
      // console.log(this.allBooks);
    })
  }

}
