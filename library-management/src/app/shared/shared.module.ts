import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    MatSidenavModule,
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    AsyncPipe,
    CommonModule,
    MatTableModule
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    AsyncPipe,
    CommonModule,
    MatTableModule
  ]
})
export class SharedModule { }
