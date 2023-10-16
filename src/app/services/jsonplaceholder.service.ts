import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonplaceholderService {
  constructor(private http: HttpClient) {}

  getPostList() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number) {
    return this.http
      .get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .pipe(
        catchError((e) => {
          throw new Error('Data bulunamadı');
        })
      );
  }
}
