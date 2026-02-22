import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import { WeatherResponse } from '../models/weather-response.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { UnixDatePipe } from "../services/unix-date.pipe";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { GeocodedLocation } from '../models/loc.model';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-weather',
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatTableModule, MatAutocompleteModule, UnixDatePipe],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather implements OnInit {
  lat: string = '';
  lon: string = '';
  city: GeocodedLocation | string = '';
  weatherData: WeatherResponse | null = null;
  error: string | null = null;
  forecastFields: string[] = ['date', 'high', 'low', 'icon', 'summary'];
  locResults: GeocodedLocation[] = [];
  lastLoc: GeocodedLocation | null = null;
  private searchSubject = new Subject<string>();

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(value => {
      const term = value.trim();

      if (!term) {
        this.locResults = [];
        return;
      }

      this.weatherService.getLocations(value).subscribe({
        next: (response) => {
          if(response.success) {
            this.locResults = response.data ?? [];
            this.error = null;
          }
          else {
            this.error = response.message || 'Unexpected error';
          }
        },
        error: (response) => {
          console.log(response);
          this.error = response.error?.message || 'Request failed';
        }
      });
    });
  }

  fetchWeather() {
    this.weatherData = null;

    const locToUse: GeocodedLocation | null =
      this.isLoc(this.city)
        ? this.city
        : (this.locResults.length > 0 ? this.locResults[0] : null);

    if (!locToUse) {
      this.error = 'Please enter a city.';
      return;
    }

    this.lastLoc = locToUse;

    if (!this.isLoc(this.city)) {
      this.city = locToUse;
    }

    this.weatherService.getWeather(locToUse.lat, locToUse.lon).subscribe({
      next: (response) => {
        if(response.success) {
          this.weatherData = response.data ?? [];
          this.error = null;
        }
        else {
          this.error = response.message || 'Unexpected error';
        }
      },
      error: (response) => {
        console.log(response);
        this.error = response.error?.message || 'Request failed';
      }
    })
  }
  
  onCityChange(value: any) {
    if (this.isLoc(value)) {
      return;
    }

    this.searchSubject.next(value);
  }

  displayLoc(loc: string | GeocodedLocation | null): string {
    if (!loc) {
      return '';
    } 
    if (typeof loc === 'string') {
      return loc;
    }

    const parts = [loc.name, loc.state, loc.country].filter(Boolean);
    return parts.join(', ');
  }

  private isLoc(value: unknown): value is GeocodedLocation {
    return !!value && typeof value === 'object' && 'lat' in (value as any) && 'lon' in (value as any);
  }
}
