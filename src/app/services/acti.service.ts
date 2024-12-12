import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DailyAnalyses } from '../models/daily-analyses.model';

@Injectable({
  providedIn: 'root'
})
export class ACTIService {
  private apiUrl = 'https://example.com/api/products';

  constructor(private _httpClient: HttpClient) {}

  getDailyAnalyses(): Observable<DailyAnalyses[]> {
    return this._httpClient.get<DailyAnalyses[]>(this.apiUrl);
  }
}