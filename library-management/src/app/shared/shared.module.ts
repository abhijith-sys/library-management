import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormField } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
    MatTableModule,
    MatPaginator,
    MatSort,
    MatFormField,
    HttpClientModule,
    ReactiveFormsModule
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
    MatTableModule,
    MatPaginator,
    MatSort, MatFormField, HttpClientModule,ReactiveFormsModule
  ]
})
export class SharedModule { }
