import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { shareReplay } from 'rxjs';
import { IFilter } from '../model/ifilter';
@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  // in real application url will be in the enviroment or proxy config
url = '/assets/data/filters.json'
  constructor(private http: HttpClient) { }

  getFilters$ = this.http.get<IFilter[]>(this.url).pipe(shareReplay(1))
}
