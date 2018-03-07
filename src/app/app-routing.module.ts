import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';

import { BookComponent } from './book/book/book.component';

const routes: Routes = [
  {
    path: 'book',
    component: BookComponent,
    data: {
      title: 'Book'
    },
    canActivate: [AuthGuard]
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
