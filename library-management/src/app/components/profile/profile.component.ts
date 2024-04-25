import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userStore } from '../../store/user.store';
import { User } from '../../../assets/interface/user.interface';
import { userListStore } from '../../store/userList.store';
import { LocalStorageService } from '../../service/localStorage.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  usersStore = inject(userStore);
  userListStore = inject(userListStore);
  localService = inject(LocalStorageService)
  userId: string = '';

  user: User = {
    id: 0,
    name: '',
    email: '',
    isActive: false,
    borrowedBooks: 0,
    returnedBooks: 0,
    holdingBooks: 0,
    bookHistory: [],
    maxBookLimit: 0,
    role: '0'
  };
  historyColumns: string[] = ['bookId', 'title', 'status', 'takenDate', "returnedDate"];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.localService.setLocalUser() 
    this.localService.setLocalBooks()
    this.localService.setLocalUserList()

    // Retrieving the userId parameter from the route
    this.route.paramMap.subscribe(params => {
      // Accessing the userId parameter

      this.userId = params.get('userId') ?? '';
      // Check if userId is present
      if (this.userId) {
        const result = this.userListStore.findOne(Number(this.userId));
       

        if (result) {
          this.user = result
        }
      } else {
        const result = this.userListStore.findByEmail(this.usersStore.user().email);

        // show the current user details
        if (result) {
       
          this.user = result
        } else {
          this.user = {
            id: 0,
            name: this.usersStore.user().name,
            email: this.usersStore.user().email,
            isActive: false,
            borrowedBooks: 0,
            returnedBooks: 0,
            holdingBooks: 0,
            bookHistory: [],
            maxBookLimit: 1,
            role: "0"
          };
        }


      }
    });

  }

  editProfile(): void {
    // Redirect to the profile edit page
    if (this.userId) {
      this.router.navigate(['/profile-form', this.userId]);
    } else {
      this.router.navigate(['/profile-form']);
    }

  }

  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['/']);

  }
}
