import { Injectable } from '@angular/core';
import { Features } from './types';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureServiceService {

  constructor() { }



getFeatures(){
  return this.featuresListing;
}


  featuresListing: Features[] = [
    {
      title: 'TypeScript Integration',
      description: 'Benefits of type safety and code maintainability with TypeScript',
      imageUrl: '../assets/feature-images/type.png',
      link: '/typescript-page'
    },
    {
      title: 'Component-Based Architecture',
      description: 'Build modular and reusable components for a scalable UI',
      imageUrl: '../assets/feature-images/component.png',
      link: '/components-page'
    },
    {
      title: 'Reactive Programming with RxJs',
      description: 'Utilize the power of reactive programming for handling asynchronous operations in a declarative manner',
      imageUrl: '../assets/feature-images/Rxjs.png',
      link: '/rxjs-page'
    },
    {
      title: 'Angular Material',
      description: 'Integrate pre-built UI components for a consistent and responsive design',
      imageUrl: '../assets/feature-images/material.png',
      link: '/angular-material-page'
    },
    {
      title: 'Testing',
      description: 'Ensure code reliability with comprehensive unit and integration testing using Angular testing utilities',
      imageUrl: '../assets/feature-images/test.png',
      link: '/testing-page'
    },
    {
      title: 'Lazy Loading',
      description: 'Improve application loading performance by loading modules on demand rather than upfront',
      imageUrl: '../assets/feature-images/lazy.jpg',
      link: '/lazy-loading-page'
    },
    {
      title: 'Server Side Rendering',
      description: 'Enhance initial page load performance and SEO by rendering Angular applications on the server',
      imageUrl: '../assets/feature-images/ssr.png',
      link: '/ssr-page'
    },
    {
      title: 'State Management',
      description: 'Manage application state efficiently using Angular services and state management libraries',
      imageUrl: '../assets/feature-images/state.png',
      link: '/state-management-page'
    },
    {
      title: 'Progressive Web App (PWA)',
      description: 'Enable offline capabilities, push notifications, and an app-like experience with PWA support',
      imageUrl: '../assets/feature-images/pwa.png',
      link: '/pwa-page'
    },
    {
      title: 'Custom Directives and Pipes',
      description: 'Create custom directives and pipes to extend Angular’s functionality and enhance code maintainability',
      imageUrl: '../assets/feature-images/directive.png',
      link: '/custom-directives-pipes-page'
    },
    {
      title: 'Reactive Forms',
      description: 'Build dynamic and data-driven forms with reactive form approach in Angular',
      imageUrl: '../assets/feature-images/form.png',
      link: '/reactive-forms-page'
    },
    {
      title: 'Services and Dependency Injection',
      description: 'Create and use services to share data and functionality across components using Angular\'s powerful dependency injection system',
      imageUrl: '../assets/feature-images/service.png', // Adjust the path based on your project structure
      link: '/services-di-page'
    },    
    {
      title: 'Routing and Navigation',
      description: 'Enable client-side navigation and create a seamless user experience with Angular\'s robust routing capabilities.',
      imageUrl: '../assets/feature-images/route.jpg', // Adjust the path based on your project structure
      link: '/routing-di-page'
    }
    
  ];
} 