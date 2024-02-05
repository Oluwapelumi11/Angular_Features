import { Component,Input } from '@angular/core';
import { Features } from '../types';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.css',
  animations: [
    trigger('slideInFromBottom', [
      state('void', style({
        transform: 'translateY(10%)',
        opacity: 0
      })),
      state('onView',style({
        opacity:1,
        transform: 'translateY(100%)'
      })),
      transition('void => onView', [animate('500ms ease-out')]
      ),
    ]),
  ],
})
export class FeatureCardComponent {

@Input() feature! : Features;

  
}
