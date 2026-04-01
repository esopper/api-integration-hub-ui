import { Routes } from '@angular/router';
import { Github } from './github/github';
import { Weather } from './weather/weather';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: HomeComponent, title: 'API Integration Hub' },
            { path: 'github', component: Github, title: 'GitHub | API Integration Hub' },
            { path: 'weather', component: Weather, title: 'Weather | API Integration Hub' }
        ]
    }
];
