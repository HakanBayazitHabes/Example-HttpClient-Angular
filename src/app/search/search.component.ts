import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  search = new FormControl('');

  searchResultList: string[] = [];
  constructor(private jsonPlaceHolderService: JsonplaceholderService) {}

  ngOnInit(): void {
    this.search.valueChanges.subscribe((x) => {
      this.jsonPlaceHolderService
        .getUserWithSearch(x as string)
        .subscribe((y) => {
          this.searchResultList = y;
        });
    });
  }
}
