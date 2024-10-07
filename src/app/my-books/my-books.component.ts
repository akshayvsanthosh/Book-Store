import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit{
  myBook:any=[]
  dataFromMyBook:boolean=true

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getMyBook()
    this.api.myBook.subscribe((result:any)=>{
         this.myBook=result
    })
  }

}
