import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';
import { WeatherResponse } from '../models/weather-response.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'http://localhost:8080/api/weather';
  private http = inject(HttpClient);

  getWeather(city: string): Observable<ApiResponse<WeatherResponse>> {
    return this.http.get<ApiResponse<any>>(`${this.apiUrl}?city=${city}`);
  }
}
