import { provideRouter, RouterConfig }  from '@angular/router';
import { CoreDetailsComponent } from './components/details/details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: RouterConfig = [
    {
        path: 'app/details',
        component: CoreDetailsComponent
    },
    {
        path: 'app/dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/app/dashboard',
        pathMatch: 'full'
    },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];