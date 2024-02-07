import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms'


@Component({
  selector: 'app-form-feature',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-feature.component.html',
  styleUrl: './form-feature.component.css'
})
export class FormFeatureComponent {

name = new FormControl('');
  
}
