import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { SidenavcomponentComponent } from './sidenavcomponent/sidenavcomponent.component';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SidenavcomponentComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent implements OnInit {
  title = 'GeegPay';
  
  ngOnInit(): void {
    initFlowbite();
  }
  

}
