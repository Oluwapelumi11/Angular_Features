import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-component',
  standalone: true,
  imports: [],
  templateUrl: './navigation-component.component.html',
  styleUrl: './navigation-component.component.css'
})
export class NavigationComponentComponent {
  @Output() Shown = new EventEmitter<{NavShow: boolean}>();

  navShown:boolean = true;

  showNav(){
    return this.navShown = !this.navShown
    this.Shown.emit({NavShow: this.navShown})
  }


}
