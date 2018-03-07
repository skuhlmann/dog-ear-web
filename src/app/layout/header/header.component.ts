import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="centered">
      <h1>
        {{ title }}
      </h1>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'DogEar';

  constructor() { }

  ngOnInit() {
  }

}
