import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Component,OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject, catchError, debounceTime,distinctUntilChanged,filter,map, of, switchMap } from 'rxjs';
import { ReactiveService } from '../../reactive.service';
import { number } from 'echarts';

@Component({
  selector: 'app-actual-reactive',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [HttpClient, HttpClientModule],
  templateUrl: './actual-reactive.component.html',
  styleUrl: './actual-reactive.component.css'
})
export class ActualReactiveComponent implements OnInit  {
  
  constructor(private http: HttpClient){
    this.quantity.update((qty) => qty + (qty * .2))
  }
  searchstring:string = "";
  searchSubject$ = new Subject<string>();
  results$!: Observable<any>;
  client = inject(ReactiveService).client;
    ngOnInit(): void {
      this.results$ = this.searchSubject$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap((searchString: any) => this.queryAPI(searchString))
      );
    }
    

    queryAPI(searchString: string): Observable<any> {
      const params = new HttpParams()
        .set('query', searchString)
        .set('client_id', this.client);
    
      return this.http.get<any[]>('https://api.unsplash.com/search/photos', { params });
  }

  inputChanged($event:any) {
    console.log('input changed', $event);
    this.searchSubject$.next($event);
  }

  vehicles = [
    {id:1, name: "Toyota Corolla", price: 2000},
    {id:2, name: "Aston Martin", price: 2456},
    {id:3, name: "Bugatti Divo", price: 6700},
    {id:4, name: "Lamborghini veneno", price: 10000},
    {id:5, name: "Mercedes Maybach", price: 222000},
  ];

    quantity = signal(1);
    qtyAvailable = signal([1,2,3,4,5,6]);
    selectedVehicle = signal<Vehicle>(this.vehicles[0]);

    onQuantitySelected(qty:number){
        this.quantity.set(qty);
    }

    onVehicleSelected(index :number){
      this.selectedVehicle.set(this.vehicles[index])
      this.searchstring = this.selectedVehicle().name;
      this.inputChanged(this.searchstring)
    }

    exprice = computed(() => this.selectedVehicle().price * this.quantity())



}
export interface Vehicle {
id: number,
name: string,
price: number
}
