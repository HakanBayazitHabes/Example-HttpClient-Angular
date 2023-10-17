import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { Post } from './models/post';
import { JsonplaceholderService } from './services/jsonplaceholder.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  postList: string[] = [];
  isLoadingShow: boolean = true;
  currencyList: string[] = ['Türk Lirası', 'Dolar'];
  selectCurrency = new FormControl('Türk Lirası');

  constructor(private jsonPlaceHolderService: JsonplaceholderService) {}

  ngOnInit(): void {
    this.selectCurrency.valueChanges.subscribe((x) => {
      console.log(x);
    });
  }
}
