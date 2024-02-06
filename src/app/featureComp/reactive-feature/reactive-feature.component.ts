import { Component, OnInit } from '@angular/core';
import { MobileNavComponent } from '../../mobile-nav/mobile-nav.component';
import { Features } from '../../types';
import { FeatureServiceService } from '../../feature-service.service';
import { FeatureCardComponent } from '../feature-card/feature-card.component';

@Component({
  selector: 'app-reactive-feature',
  standalone: true,
  imports: [MobileNavComponent,FeatureCardComponent],
  templateUrl: './reactive-feature.component.html',
  styleUrl: './reactive-feature.component.css'
})
export class ReactiveFeatureComponent implements OnInit {
    title:string = "Angular Features";
  featureList : Features[] = []
   
  
  constructor( private featureService: FeatureServiceService  ){ }
  ngOnInit(): void {
    this.featureList = this.featureService.getFeatures();
    // initFlowbite();
  }
}
