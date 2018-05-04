import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../../core/auth.service';
import { NavService } from '../../core/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string;
  onBookmark: boolean;

  constructor(public auth: AuthService, public router: Router, public nav: NavService) { 
    this.title = "dogear"; 
  }

  navigate() {
    this.router.navigate(['/book']);
    this.nav.activate('book');
  }
}
