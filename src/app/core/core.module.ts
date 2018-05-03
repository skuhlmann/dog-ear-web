import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavService } from './nav.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    NavService, 
    AuthService, 
    AuthGuard
  ]
})
export class CoreModule { }
