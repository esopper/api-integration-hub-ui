import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
    constructor(private router: Router, private route: ActivatedRoute) {}

    goToGitHub() {
      this.router.navigate(['github'], {relativeTo: this.route});
    }

    goToWeather() {
      this.router.navigate(['weather'], {relativeTo: this.route});
    }

    goToSource() {
      window.open('https://github.com/esopper/api-integration-hub', '_blank');
    }
}
