import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
})
export class AComponent implements OnInit {
  currency: string | undefined;
  constructor(private jsonPlaceHolderService: JsonplaceholderService) {}

  ngOnInit(): void {
    this.jsonPlaceHolderService.currencyObservable.subscribe((x) => {
      this.currency = x;
    });
  }
}
