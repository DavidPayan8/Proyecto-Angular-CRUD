import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Post } from './post';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class postService {

  private postApi = "https://jsonplaceholder.typicode.com."; // URL to web api

  //Constructor
  constructor(private httpClient: HttpClient) { }

  // Http Header Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
      
  // Metodos


// GET
	getAll(): Observable<any> {  
    return this.httpClient.get(this.postApi + '/posts/')
  } // usar adecuadamente las interfaces
    
// CREATE
    
  create(post:Post): Observable<any> {
  
    return this.httpClient.post(this.postApi + '/posts/', JSON.stringify(post), this.httpOptions)
  }  
    
// BUSCAR
    
  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.postApi + '/posts/' + id)
  }
    
// ACTUALIZAR
    
  update(id:number, post:Post): Observable<any> {
    return this.httpClient.put(this.postApi + '/posts/' + id, JSON.stringify(post), this.httpOptions)

  }
       
// BORRAR
  delete(id:number){
    return this.httpClient.delete(this.postApi + '/posts/' + id, this.httpOptions)
  }
      
}
