import { Routes } from '@angular/router';
import { Github } from './github/github';
import { Weather } from './weather/weather';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'github', component: Github },
            { path: 'weather', component: Weather }
        ]
    }
];
