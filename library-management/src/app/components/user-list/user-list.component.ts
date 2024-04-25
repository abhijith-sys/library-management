import { Component, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { User } from '../../../assets/interface/user.interface';
import { dummyUsers } from '../../../dummy/duydata';
import { SharedModule } from '../../shared/shared.module';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

import { userListStore } from '../../store/userList.store';
import { LocalStorageService } from '../../service/localStorage.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent {
  userListStore =inject(userListStore)
  localStorageService = inject(LocalStorageService)

  displayedColumns: string[] = ['id', 'name', 'email', 'active', 'booksTaken', 'booksReturned', 'booksHolding'];
  


  constructor(private router: Router) { }
  ngOnInit(): void {
    this.localStorageService.setLocalUserList();
  }


  redirectToUserDetails(userId: number) {
    console.log("clicked");

    // Navigate to the user details page, passing the userId as a route parameter
    this.router.navigate(['/profile', userId]);


  }
}
