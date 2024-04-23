import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class NavbarComponent {
  sidenavWidth = 15; // Initial width in em units

  constructor() { }

  ngOnInit() { }

  increase() {
    this.sidenavWidth = 15;
    console.log('Increased sidenav width');
  }

  decrease() {
    this.sidenavWidth = 4;
    console.log('Decreased sidenav width');
  }
}
