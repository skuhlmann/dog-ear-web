import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-actions',
  templateUrl: './book-actions.component.html',
  styleUrls: ['./book-actions.component.scss']
})
export class BookActionsComponent implements OnInit {
  @Input() action: string
  @Output() actionChange = new EventEmitter();
  showForm: boolean;
  showList: boolean;

  constructor() { }

  ngOnInit() {
    this.showForm = false;
    this.showList = false
  }

  toggle(type) {
    this[type] = !this[type];
    
    if (!this.showingAction()) {
      this.action = ''
    } else {
      this.action = this.showForm ? "bookForm" : "bookList"
    }

    this.actionChange.emit(this.action)
  }

  showingAction() {
    return this.showForm || this.showList
  }
}
