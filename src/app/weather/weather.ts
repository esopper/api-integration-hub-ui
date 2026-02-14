import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

@Component({
  selector: 'app-weather',
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatTableModule, UnixDatePipe],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather {
  city: string = '';
  weatherData: WeatherResponse | null = null;
  error: string | null = null;
  forecastFields: string[] = ['date', 'high', 'low', 'icon', 'summary'];

  constructor(private weatherService: WeatherService) {}

  fetchWeather() {
    this.weatherData = null;

    this.weatherService.getWeather(this.city).subscribe({
      next: (response) => {
        if(response.success) {
          this.weatherData = response.data;
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
}
