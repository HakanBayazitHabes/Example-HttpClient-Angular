import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { Post } from './models/post';
import { JsonplaceholderService } from './services/jsonplaceholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  postList: Post[] = [];

  constructor(private jsonPlaceHolderService: JsonplaceholderService) {}

  ngOnInit(): void {
    this.jsonPlaceHolderService.getPostList().subscribe((x) => {
      this.postList = x;
    });
  }
}
