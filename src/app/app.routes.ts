import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { FeaturesComponent } from './features/features.component';
import { ServiceFeatureComponent } from './featureComp/service-feature/service-feature.component';
import { RoutingFeatureComponent } from './featureComp/routing-feature/routing-feature.component';
import { LazyFeatureComponent } from './featureComp/lazy-feature/lazy-feature.component';
import { StateFeatureComponent } from './featureComp/state-feature/state-feature.component';
import { PwaFeatureComponent } from './featureComp/pwa-feature/pwa-feature.component';
import { ReactiveFeatureComponent } from './featureComp/reactive-feature/reactive-feature.component';
import { DirectiveFeatureComponent } from './featureComp/directive-feature/directive-feature.component';
import { FormFeatureComponent } from './featureComp/form-feature/form-feature.component';
import { ComponentFeatureComponent } from './featureComp/component-feature/component-feature.component';
import { ActualReactiveComponent } from './featureComp/actual-reactive/actual-reactive.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
       
     },
    {
        path: "features",
        component: FeaturesComponent,
        // redirectTo: "overview",
        children: [
            {
                path:"",
                component: ReactiveFeatureComponent,
            },
            {
                path: "reactive",
                component: ActualReactiveComponent,
            },
            {
                path:"forms",
                component: FormFeatureComponent,
            },
            {
                path:"service",
                component: ServiceFeatureComponent,
            },
            {
                path:"routing",
                component: RoutingFeatureComponent,
            },
            {
                path:"component",
                component: ComponentFeatureComponent,
            },
            {
                path:"lazy",
                component: LazyFeatureComponent,
            },
            {
                path:"ssr",
                component: ServiceFeatureComponent,
            },
            {
                path:"states",
                component: StateFeatureComponent,
            },
            {
                path:"pwa",
                component: PwaFeatureComponent,
            },
            {
                path:"directive",
                component: DirectiveFeatureComponent,
            },
        ],
    },
    {
        path: "**",
        component: PageErrorComponent,
    }
];
