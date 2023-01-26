import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { Countries } from '../model/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  url = 'https://restcountries.com/v3.1/all'
  constructor(private http:HttpClient) { }
  getCountries$ = this.http.get<Countries[]>(this.url).pipe(shareReplay(1))

}
