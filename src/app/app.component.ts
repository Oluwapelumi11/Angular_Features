import { Component,OnInit } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavigationComponentComponent } from './navigation-component/navigation-component.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavigationComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Angular_Features';


  ngOnInit(): void {
    initFlowbite();
  }
}
