import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  constructor(private router:Router,private route:ActivatedRoute) { }

  navigate(path:string){
    return this.router.navigate([path], {relativeTo: this.route})
  }
  
}
