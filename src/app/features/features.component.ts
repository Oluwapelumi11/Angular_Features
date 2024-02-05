import { Component,OnInit } from '@angular/core';
import { FeatureServiceService } from '../feature-service.service';
import { Features } from '../types';
import { FeatureCardComponent } from '../feature-card/feature-card.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [FeatureCardComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent implements OnInit {
featureList : Features[] = []
 

constructor( private featureService: FeatureServiceService  ){ }
ngOnInit(): void {
  this.featureList = this.featureService.getFeatures();
  initFlowbite();
}

}
