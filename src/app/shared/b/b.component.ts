import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
})
export class BComponent implements OnInit {
  currency: string | undefined;
  constructor(private jsonPlaceHolderService: JsonplaceholderService) {}
  ngOnInit(): void {
    this.jsonPlaceHolderService.currencyObservable.subscribe((x) => {
      this.currency = x;
    });
  }
}
