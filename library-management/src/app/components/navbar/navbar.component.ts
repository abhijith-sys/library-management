import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../service/auth.service';
import { ADMIN_ROLE } from '../../utils/constants';

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
  adminrole = ADMIN_ROLE;
  sidenavWidth = 4; // Initial width in em units
  currentuserRole = ""
  AuthService = inject(AuthService)
  constructor() { }

  ngOnInit(): void {
   
    this.currentuserRole = this.AuthService.getCurrentUserRole();
  }

  // increase() {
  //   this.sidenavWidth = 15;
  //   console.log('Increased sidenav width');
  // }

  // decrease() {
  //   this.sidenavWidth = 4;
  //   console.log('Decreased sidenav width');
  // }
}
