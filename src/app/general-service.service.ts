import { Injectable, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  constructor() { }

  activeRoute$ = inject(ActivatedRoute)
  
  
}
