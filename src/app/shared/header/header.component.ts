import { Component, OnInit } from '@angular/core';
// import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;

  constructor() { 
    this.title = "dogear"; 
  }

  ngOnInit() {
  }

}
