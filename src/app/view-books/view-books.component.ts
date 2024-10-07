import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit{
  allBooks:any=[]
  parentData:boolean=true
  searchKey:string=""
  
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getAllBooks()

    this.api.searchKey.subscribe((res:any)=>{
      this.searchKey=res      
    })
  }

  getAllBooks(){
    this.api.getAllBooksAPI().subscribe((result:any)=>{
      this.allBooks=result
      console.log(this.allBooks);
    })
  }

  sortByCat(){
    this.allBooks.sort((book1:any,book2:any)=>book1.bookCategory-book2.bookCategory)
  }

}