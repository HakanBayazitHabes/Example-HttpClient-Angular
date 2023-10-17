import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { JsonplaceholderService } from './services/jsonplaceholder.service';
import { Observable, delay } from 'rxjs';

@Injectable()
export class ExampleResolver implements Resolve<string[]> {
  constructor(private jsonPlaceHolderService: JsonplaceholderService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<string[]> {
    return this.jsonPlaceHolderService.getPostList(1, 10).pipe(delay(5000));
  }
}
