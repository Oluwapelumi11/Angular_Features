import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject, catchError, debounceTime,distinctUntilChanged,filter,map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-actual-reactive',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [HttpClient, HttpClientModule],
  templateUrl: './actual-reactive.component.html',
  styleUrl: './actual-reactive.component.css'
})
export class ActualReactiveComponent implements OnInit  {
  
  constructor(private http: HttpClient){}
  searchstring:string = "";
  searchSubject$ = new Subject<string>();
  results$!: Observable<any>;

    ngOnInit(): void {
      this.results$ = this.searchSubject$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap((searchString: any) => this.queryAPI(searchString))
      );
    }
    

  queryAPI(searchString:string){
    console.log('query API', searchString);
    return this.http.get(`https://www.reddit.com/r/aww/search.json?q=${searchString}`)
    .pipe(
      map((result: any) => result['data']['children']),
      filter((children: any[]) => children && children.length > 0), // Filter out empty or null children arrays
      map((children: any[]) => children.filter(child => child.data.thumbnail)),
        catchError(error => {
          console.error('Error fetching data from Reddit API:', error);
          return of([]); // Return an empty array or handle the error as needed
        })
      )}

  inputChanged($event:any) {
    console.log('input changed', $event);
    this.searchSubject$.next($event);
  }


  isValidThumbnail(thumbnailUrl: string): boolean {
    if (thumbnailUrl !== 'default' && thumbnailUrl !== 'self') {
      
      if (thumbnailUrl && thumbnailUrl.trim() !== '') {
        const imageExtensions = /\.(jpeg|jpg|gif|png)$/i;
        if (imageExtensions.test(thumbnailUrl)) {
          return true; 
        }
      }
    }
    return false;
  }
  
}
