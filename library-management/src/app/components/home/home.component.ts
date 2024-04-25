import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { dummyBooks } from '../../../dummy/duydata';
import { bookStore } from '../../store/book.store';
import { ADMIN_ROLE } from '../../utils/constants';
import { userStore } from '../../store/user.store';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { LocalStorageService } from '../../service/localStorage.service';
import { userListStore } from '../../store/userList.store';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  adminrole = ADMIN_ROLE;
  currentuserRole = ""
  userStore = inject(userStore)
  bookStore = inject(bookStore)
  AuthService = inject(AuthService)
  userListStore = inject(userListStore)
  books: any[] = dummyBooks;
  localStorageService = inject(LocalStorageService)

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.localStorageService.setLocalBooks()
    this.currentuserRole = this.AuthService.getCurrentUserRole();
  }
  editBook(id: String,event: Event) {
    event.stopPropagation();
    // Navigate to the edit form
    this.router.navigate(['/book-form', id]);
  }
  borrowBook(id: String,event: Event) {
    event.stopPropagation();
    const userFound = this.userListStore.findByEmail(this.userStore.user().email);
    if (userFound) {
     
      const borrowedBooks = userFound.bookHistory.filter(history => history.status === 'Borrowed');
      if (borrowedBooks.length >= userFound.maxBookLimit) {
        alert("borrow limit exceeded")
   // User cannot borrow more books until the borrowed ones are returned
      }

      // this.router.navigate(['/book-form', id]);
    }
  }

    bookDetails(id: String): void {
      console.log('====================================');
      console.log("details");
      console.log('====================================');
      this.router.navigate(['/book-details', id]);
    }
  }
