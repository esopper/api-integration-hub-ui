import { Routes } from '@angular/router';
import { Github } from './github/github';
import { Weather } from './weather/weather';
import { LayoutComponent } from './layout/layout.component';
import { HubComponent } from './hub/hub.component';
import { PortfolioHomeComponent } from './portfolio-home/portfolio-home.component';
import { CaribouCrossingComponent } from './caribou-crossing/caribou-crossing.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: PortfolioHomeComponent, title: 'Portfolio' },
            { path: 'hub', component: HubComponent, title: 'API Integration Hub' },
            { path: 'hub/github', component: Github, title: 'GitHub | API Integration Hub' },
            { path: 'hub/weather', component: Weather, title: 'Weather | API Integration Hub' },
            { path: 'caribou-crossing', component: CaribouCrossingComponent, title: 'Caribou Crossing' },
        ]
    }
];
