import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cards = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];

  generateRandomColor() {
    return "#" + ("000000" + Math.floor(Math.random() * 16777216).toString(16)).substr(-6);

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
