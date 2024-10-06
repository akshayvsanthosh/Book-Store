import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

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
}
