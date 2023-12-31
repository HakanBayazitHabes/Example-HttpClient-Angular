import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import {
  BehaviorSubject,
  catchError,
  filter,
  from,
  map,
  mergeMap,
  skip,
  take,
  toArray,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonplaceholderService {
  constructor(private http: HttpClient) {}

  public currencyObservable = new BehaviorSubject('Türk Lirası');

  setcurrency(val: any) {
    this.currencyObservable.next(val);
  }

  getPostList(page: number, pageSize: number) {
    return this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        mergeMap((x) => from(x)),
        skip((page - 1) * pageSize),
        take(pageSize),
        map((x) => `${x.id}-${x.userId}-${x.title}`),
        toArray()
      );
  }

  getPost(id: number) {
    return this.http.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  getUserWithSearch(searchText: string) {
    return this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        mergeMap((x) => from(x)),
        filter((x) => x.name.toLowerCase().includes(searchText.toLowerCase())),
        map((x) => x.name),
        toArray()
      );
  }
}
