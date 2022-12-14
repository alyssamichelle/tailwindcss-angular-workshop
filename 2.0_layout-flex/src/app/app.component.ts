import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cards = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];

  generateRandomColor() {
    return "#" + ("000000" + this.random(16777216).toString(16)).substr(-6);
  }

  generateRandomHeight() {
    return `${this.random(150) - 75}px`;
  }

  random(max: number) {
    return Math.floor(Math.random() * max);
  }

  protected assignRandomColor() {
    let value = this.generateRandomColor();
    document.documentElement.style.setProperty('--new-color', value);
    // [...document.querySelectorAll('.ball')].forEach((ball) => {
    //   console.log(ball)
    // })
  }

  ngOnInit() {
    this.assignRandomColor();

    // window.onscroll = function (uiEvent:unknown) {
    //   console.log(uiEvent.button);
    // };
  }
}
