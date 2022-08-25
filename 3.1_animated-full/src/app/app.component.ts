import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// ALYSSA! This is very not Angular-y. Ish.

export class AppComponent {
  arrow: HTMLElement

  constructor() {
    this.arrow = document.querySelectorAll('.arrow')[0] as HTMLElement;
  }
  
  @HostListener('window:scroll', []) onScroll() {
    const arrow = document.querySelectorAll('.arrow')[0] as HTMLElement;
    const scrollPosition = window.pageYOffset + window.innerHeight;
    const scrollThreshold = document.body.offsetHeight - 100;
    const scrolledToEnd = scrollPosition >= scrollThreshold;
    arrow.style.opacity = scrolledToEnd ? '0' : '1';
  }

  onClick() {
    window.scrollTo({top: document.body.scrollHeight});
  }

}
