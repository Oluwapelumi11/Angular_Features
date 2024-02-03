import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-component',
  standalone: true,
  imports: [],
  templateUrl: './navigation-component.component.html',
  styleUrl: './navigation-component.component.css'
})
export class NavigationComponentComponent {

  navShown:boolean = false;

  showNav(){
    return this.navShown = !this.navShown
  }


}
