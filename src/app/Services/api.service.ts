import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  searchKey=new BehaviorSubject("")
  myBook=new BehaviorSubject(null)

  server_url="http://localhost:3000"

  constructor(private http:HttpClient) { }

  registerAPI(user:any){
    return this.http.post(`${this.server_url}/register`,user)
  }

  loginAPI(user:any){
    return this.http.post(`${this.server_url}/login`,user)
  }

  appendToken(){
    const token = sessionStorage.getItem("token")
    let headers=new HttpHeaders()
    if (token) {
      headers=headers.append('Authorization',`Bearer ${token}`)
    }
      return {headers}
  }

  getAllBooksAPI(){
    return this.http.get(`${this.server_url}/allBooks`,this.appendToken())
  }

  getHomeBooksAPI(){
    return this.http.get(`${this.server_url}/homeBooks`)
  }

  addBookAPI(reqBody:any){
    return this.http.post(`${this.server_url}/addBook`,reqBody,this.appendToken())
  }

  getMyBookAPI(){
    return this.http.get(`${this.server_url}/userBooks`,this.appendToken())
  }

  getMyBook(){
    this.getMyBookAPI().subscribe((result:any)=>{
      this.myBook.next(result)
    })
  }

  deleteBookAPI(id:any){
    return this.http.delete(`${this.server_url}/book/${id}/delete`,this.appendToken())
  }

  isLoggedIn(){
    return !!sessionStorage.getItem('user')
  }
}
