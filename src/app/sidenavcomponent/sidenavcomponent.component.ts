import { Component, HostBinding, Inject, PLATFORM_ID, computed, effect, signal } from '@angular/core';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-sidenavcomponent',
  standalone: true,
  imports: [RouterModule],
  template: `
                <!-- top navigation div -->
    <div class="dark:bg-gray-800 w-full h-fit flex flex-col gap-[10px] justify-between bg-[#FAFAFA] ">
        <div class="flex sm:justify-center justify-between pr-2 pl-3 py-3 items-center sm:px-0 sm:py-0">
            <div [routerLink]="['']" [routerLinkActiveOptions]="{exact:true}" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class="dark:text-gray-400 flex items-center">
                <a [routerLink]="['']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100" class="text-red-500"><img src="../favicon.ico" alt=""></a>
                <p class= "text-[#26282C] dark:text-gray-100 sm:hidden flex px-3  text-2xl font-semibold font-jakarta first-letter :text-[#34CAA5] first-letter:text-3xl">Angular</p>
            </div>
            
            <button  class=" w-[46px]  sm:hidden  h-[92px] rounded-[100px] flex flex-col dark:bg-gray-500  bg-[#FFFFFF] p-[8px] gap-[16px] ">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>

                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>

            </div>
        </button>
            
        </div>

<div class="flex-1 my-10 space-y-4">

        <div [routerLink]="['']" [routerLinkActiveOptions]="{exact:true}" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class="dark:text-gray-400 flex group relative font-bold sm:justify-center  text-right  bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2" data-tooltip-placement="right" data-tooltip-target="home">
            <a [routerLink]="['']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 " >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-6 h-6 text-red-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
</svg>
</a>
            <a [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class= " text-[#26282C4] px-3 flex sm:hidden dark:text-gray-200">Home</a>
            
            <span [routerLink]="['']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
                    <img  class="" src="../assets/svgs/Vector active.svg" alt="">
                    
            </span>
            
        </div>
        <div id="home" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2  text-sm font-medium dark:text-gray-200  text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Home
            <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
                <div [routerLink]="'features'" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class="dark:text-gray-400 flex group relative font-bold sm:justify-center  text-right  bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2"  data-tooltip-placement="right" data-tooltip-target="feature">

            <a [routerLink]="'features'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100" class="text-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>
</a>
            <a [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class= " text-[#26282C4] px-3 flex sm:hidden dark:text-gray-200">Features</a>
            
            <span [routerLink]="['features']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
                <img class="" src="../assets/svgs/Vector active.svg" alt="">
                
            </span>
        </div>
        <div id="feature" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2  text-sm font-medium dark:text-gray-200  text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Features
            <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
                <div [routerLink]="'Strengths'" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class="dark:text-gray-400 flex group relative font-bold sm:justify-center  text-right  bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2"  data-tooltip-placement="right" data-tooltip-target="Strengths">

            <a [routerLink]="'Strengths'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100" class="text-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>
</a>
            <a [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class= " text-[#26282C4] px-3 flex sm:hidden dark:text-gray-200">Strengths</a>

            <span [routerLink]="['Strengths']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
                <img class="" src="../assets/svgs/Vector active.svg" alt="">
</span>
        </div>
        <div id="Strengths" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2  text-sm font-medium dark:text-gray-200  text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Strengths
            <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
                <div [routerLink]="'Weaknesses'" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class="dark:text-gray-400 flex group relative font-bold sm:justify-center  text-right  bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2"  data-tooltip-placement="right" data-tooltip-target="Weaknesses">

            <a [routerLink]="'Weaknesses'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100" class="text-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21" />
</svg>
</a>
            <a [routerLink]="'Weaknesses'" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class= " text-[#26282C4] px-3 flex sm:hidden dark:text-gray-200 ">Weaknesses</a>

            <span [routerLink]="['Weaknesses']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
                <img class="" src="../assets/svgs/Vector active.svg" alt="">
</span>
        </div>
        <div id="Weaknesses" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2  text-sm font-medium dark:text-gray-200  text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Weaknesses
            <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        <div [routerLink]="['Case Studies']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class="dark:text-gray-400 flex group relative font-bold sm:justify-center  text-right  bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2"  data-tooltip-placement="right" data-tooltip-target="study">

            <a [routerLink]="'Case Studies'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100" class="text-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>
</a>
            <a  [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class= " text-[#26282C4] px-3 flex sm:hidden dark:text-gray-200 ">Case Studies</a>
            <span [routerLink]="['Case Studies']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
                <img class="" src="../assets/svgs/Vector active.svg" alt="">
</span>
        </div>
        <div id="study" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2  text-sm font-medium dark:text-gray-200  text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Case Studies
            <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        <div [routerLink]="'About'" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class="dark:text-gray-400 flex group relative font-bold sm:justify-center  text-right  bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2"  data-tooltip-placement="right" data-tooltip-target="info">

                    <a [routerLink]="'About'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100" class="text-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>
</a>
                    <a [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class= " text-[#26282C4] px-3 flex sm:hidden dark:text-gray-200">About</a>
                    
                    <span [routerLink]="['About']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
                        <img class="" src="../assets/svgs/Vector active.svg" alt="">
</span>
                </div>
                <div id="info" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2  text-sm font-medium dark:text-gray-200  text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        About
                    <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
    </div>

    
    <!--end of top navigation div -->

        <div class="flex justify-center">
        <div  class="w-[46px]  items-center justify-evenly   h-[92px] rounded-[100px] sm:flex flex-col dark:bg-gray-500  bg-[#FFFFFF] p-[8px] gap-[16px] transition-colors duration-500 ">
                <button class="dark:text-red-100 text-red-950 " >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-6 h-6 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>

</button >
                <button >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="dark:text-red-950 text-gray-400  w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
</button>
</div>
        </div>
  `,
  styleUrl: './sidenavcomponent.component.css'
})
export class SidenavcomponentComponent {

     
        
}