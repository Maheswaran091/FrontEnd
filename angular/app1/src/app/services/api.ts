import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com'; // demo API

  constructor(private http: HttpClient) {}

  // GET request
  getPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  // POST request
  createPost(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/posts`, data);
  }
}
