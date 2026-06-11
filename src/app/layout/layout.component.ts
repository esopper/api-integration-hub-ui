import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
    constructor(private router: Router) {}

    goToPortfolio() {
      this.router.navigate(['']);
    }

    goToHub() {
      this.router.navigate(['hub']);
    }

    goToGitHub() {
      this.router.navigate(['hub', 'github']);
    }

    goToWeather() {
      this.router.navigate(['hub', 'weather']);
    }

    goToCaribouCrossing() {
      this.router.navigate(['caribou-crossing']);
    }

    goToSource() {
      window.open('https://github.com/esopper', '_blank');
    }
}
