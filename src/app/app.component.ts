import { ActivatedRoute, Params, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { SidenavcomponentComponent } from './sidenavcomponent/sidenavcomponent.component';
import { Component, OnInit, inject } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { GeneralServiceService } from './general-service.service';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SidenavcomponentComponent,HomeComponent,MobileNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent implements OnInit {
  
  
  title: string = ""
  constructor(private route: ActivatedRoute){
  
  }
  
  
  titleFunc(data:any){
   return this.title = data;
  }
  
  ngOnInit(): void {
   
    initFlowbite();
    
  }
  

}
