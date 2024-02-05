import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { FeaturesComponent } from './features/features.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "features",
        component: FeaturesComponent,
    },
    {
        path: "**",
        component: PageErrorComponent,
    }
];
