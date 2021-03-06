import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';

import { BookComponent } from './book/book/book.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'book',
    component: BookComponent,
    data: {
      title: 'Book',
    },
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/book',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/book',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
