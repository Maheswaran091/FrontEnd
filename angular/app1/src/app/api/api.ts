import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-api',
  standalone: false,
  templateUrl: './api.html',
  styleUrl: './api.css'
})
export class Api implements OnInit {
  posts: any;
  newPost: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // GET example
    this.api.getPosts().subscribe(res => {
      console.log(res); 
      this.posts = res;
    });

    // POST example
    const postData = { title: 'foo', body: 'bar', userId: 1 };
    this.api.createPost(postData).subscribe(res => {
      this.newPost = res;
    });
  }
}
