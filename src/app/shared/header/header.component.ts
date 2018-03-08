import { Component, OnInit } from '@angular/core';
// import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <div class="centered">
      <h1>
        {{ title }}
      </h1>
      <a routerLink="/home" routerLinkActive="active">Home</a> | 
      <a routerLink="/book" routerLinkActive="active">Books</a>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;

  constructor() { 
    this.title = "DogEar"; 
  }

  ngOnInit() {
  }

}
