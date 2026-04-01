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
            { path: '', component: HomeComponent },
            { path: 'github', component: Github },
            { path: 'weather', component: Weather }
        ]
    }
];
