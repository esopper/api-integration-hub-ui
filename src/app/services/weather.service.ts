import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';
import { WeatherResponse } from '../models/weather-response.model';
import { GeocodedLocation } from '../models/geocoded-location.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = `${environment.apiBaseUrl}/api/weather`;
  private http = inject(HttpClient);

  getWeather(lat: string, lon: string): Observable<ApiResponse<WeatherResponse>> {
    return this.http.get<ApiResponse<WeatherResponse>>(`${this.apiUrl}?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}`);
  }

  getLocations(q: string): Observable<ApiResponse<GeocodedLocation[]>> {
    return this.http.get<ApiResponse<GeocodedLocation[]>>(`${this.apiUrl}/location?q=${encodeURIComponent(q)}`);
  }
}
