import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-actions',
  templateUrl: './book-actions.component.html',
  styleUrls: ['./book-actions.component.scss']
})
export class BookActionsComponent implements OnInit {
  showForm: boolean;
  showList: boolean;

  constructor() { }

  ngOnInit() {
    this.showForm = false;
    this.showList = false
  }

  toggle(type) {
    this[type] = !this[type]
  }

  showingAction() {
    return this.showForm || this.showList
  }
}
