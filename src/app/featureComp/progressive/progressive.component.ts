import { Component, Input} from '@angular/core';




@Component({
  selector: 'app-progressive',
  standalone: true,
  imports: [],
  template: `
     
      <div class=" px-4 py-3">
    <p class="text-xl font-semibold py-1 mb-2 text-[#22242C]">{{progress.name  }}</p>
    <div class="w-full h-3 bg-gray-300  dark:bg-gray-100 rounded overflow-x-hidden">
        <div class="h-full  rounded transition-all" [style.background-color]="getColor(progress.progress)" [style.width.%]="progress.progress"></div>
    </div>
    <div class="flex justify-between mt-4">
  <p class="font-jakarta font-normal text-xl text-[#525252]">{{progress.amount}}</p>
  <p class="font-jakarta font-normal text-xl text-[#525252]">+{{progress.increase}}%</p>
    </div>
  </div>


  

  `,
  styleUrl: './progressive.component.css'
})
export class ProgressiveComponent  {
  @Input() progress:ProgressData =  {
    name: 'Progress Bar Component',
    amount: '$2,500,000',
    progress: 45,
    increase: 100
  }
  progressState: { progress: number } = { progress: 0 };



 getColor(progress: number): string {
  if (progress <= 10) {
    return '#FF006E';
  } else if (progress <= 20) {
    return '#FB5607';
  } else if (progress <= 40) {
    return '#FFBE0B';
  } else if (progress <= 60) {
    return '#3A86FF';
  } else if (progress <= 80) {
    return '#0FA3B1';
  } else if (progress <= 100) {
    return '#8338EC';
  } else {
    return 'purple';
  }
}
}


export interface ProgressData  {
  name: string,
  amount: string,
  progress: number,
  increase: number
}