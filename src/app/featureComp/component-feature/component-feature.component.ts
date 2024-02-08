import { Component } from '@angular/core';
import { ProgressData, ProgressiveComponent } from '../progressive/progressive.component';


@Component({
  selector: 'app-component-feature',
  standalone: true,
  imports: [ProgressiveComponent],
  templateUrl: './component-feature.component.html',
  styleUrl: './component-feature.component.css'
})
export class ComponentFeatureComponent {



  progressDataList: ProgressData[] = [
    {
      name: 'Book Bazaar',
      amount: '$2,500,000',
      progress: 90,
      increase: 15
    },
    {
      name: 'Artisan Aisle',
      amount: '$1,800,000',
      progress: 70,
      increase: 10
    },
    {
      name: 'Toy Troop',
      amount: '$1,200,000',
      progress: 60,
      increase: 8
    },
    {
      name: 'XStore',
      amount: '$1,000,000',
      progress: 55,
      increase: 7
    },
    {
      name: "Starter's House ",
      amount: '$900,000',
      progress: 50,
      increase: 6
    },
    {
      name: 'PayGo',
      amount: '$750,000',
      progress: 40,
      increase: 17
    },
    {
      name: 'SpaceX',
      amount: '$300,000',
      progress: 20,
      increase: 4
    }
    ];
  
}
