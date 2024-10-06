import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  allBooks:any=""

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getHomeBook()
  }

  getHomeBook(){
    this.api.getHomeBooksAPI().subscribe((result:any)=>{
      this.allBooks=result
      console.log(this.allBooks);
      
    })
  }

}
