import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../../core/auth.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  onBookmark: boolean;

  constructor(public auth: AuthService, public router: Router) { 
    this.title = "dogear"; 
  }

  ngOnInit() {

    console.log(this.router.url)
    console.log(this.router.routerState)

  }

}
