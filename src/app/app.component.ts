import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: number[] = new Array(200);

  constructor() {}

  ngOnInit(): void {
    let script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    script.src = '../assets/js/tetrominoes.js';
    document.body.appendChild(script);

    let script1 = document.createElement("script");
    script1.async = true;
    script1.type = "text/javascript";
    script1.src = '../assets/js/tetris.js';
    document.body.appendChild(script1);
  }
}
