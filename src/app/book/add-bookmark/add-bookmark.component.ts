import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Bookmark } from '../../models/bookmark';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnChanges {
  @Input() bookmark: Bookmark;
  @Input() totalPages: string;
  @Output() onAddBookmark = new EventEmitter<Bookmark>();
  bookmarkForm: FormGroup;
  percentComplete: number;

  constructor(private fb: FormBuilder) { 
    this.createForm();
    this.percentComplete = 50;
  }
  
  ngOnChanges() {
    const activeMark = this.bookmark || { page: ''}
    this.rebuildForm(activeMark)
    this.setPercentComplete(activeMark);
  }

  createForm() {
    this.bookmarkForm = this.fb.group({
      page: ['', Validators.required ]
    });
  }

  rebuildForm(mark) {
    this.bookmarkForm.reset({
      page: mark.page
    })
  }

  setPercentComplete(activeMark) {
    this.percentComplete = Math.round((+activeMark.page / +this.totalPages) * 100)
  }

  submitBookmark() {
    if (this.bookmarkForm.status !== "INVALID") {
      const newBookmark: Bookmark = {
        page: this.bookmarkForm.get('page').value
      }

      this.onAddBookmark.emit(newBookmark);
    }
  }
}
