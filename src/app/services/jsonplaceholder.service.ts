import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { catchError, from, mergeMap, skip, take, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonplaceholderService {
  constructor(private http: HttpClient) {}

  getPostList(page: number, pageSize: number) {
    return this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        mergeMap((x) => from(x)),
        skip((page - 1) * pageSize),
        take(pageSize),
        toArray()
      );
  }

  getPost(id: number) {
    return this.http.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}
