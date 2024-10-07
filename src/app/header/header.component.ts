import { Component, Input } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() dataFromParent:boolean=false

  constructor(private api:ApiService){}

  getSearchKey(event:any){
    this.api.searchKey.next(event.target.value)    
  }

}
