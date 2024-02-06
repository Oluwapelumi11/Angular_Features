import { Component,OnInit, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFeatureComponent } from '../featureComp/reactive-feature/reactive-feature.component';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { GeneralServiceService } from '../general-service.service';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [MobileNavComponent,RouterModule,RouterOutlet,ReactiveFeatureComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  title:string = "Angular Features";


route = inject(GeneralServiceService);


navigate(path:string){
  this.route.navigate(path);
}


}
