import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Input() dataFromParent:boolean=false
  isLoggedIn:any

  constructor(private api:ApiService,private router:Router){}

  ngOnInit(): void {
    if (this.api.isLoggedIn()) {
      this.isLoggedIn=true
    } else {
      this.isLoggedIn=false
    }
  }

  getSearchKey(event:any){
    this.api.searchKey.next(event.target.value)    
  }

  logout(){
    sessionStorage.clear()
    this.router.navigateByUrl("")
  }

}
