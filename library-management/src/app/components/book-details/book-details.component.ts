import { Component, inject } from '@angular/core';
import { bookStore } from '../../store/book.store';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../assets/interface/user.interface';
import { AuthService } from '../../service/auth.service';
import { ADMIN_ROLE } from '../../utils/constants';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  adminrole = ADMIN_ROLE;
  bookId: string = '';
  currentuserRole = ""
  book: Book = {
    id: "",
    title: "",
    author: "",
    description: "",
    releaseDate: "",
    image: "",
    available: true,
    history:[]
  }
  bookStore = inject(bookStore);
  AuthService=inject(AuthService)
  historyColumns: string[] = ['userId','name', 'action', 'date'];
  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.currentuserRole = this.AuthService.getCurrentUserRole();
    this.route.paramMap.subscribe(params => {
      this.bookId = params.get('id') ?? '';
      if (this.bookId) {
        const result = this.bookStore.findOne(this.bookId)
        if (result) {
          this.book = result;
        }
      } else {
        console.log('User ID not provided');
      }
    });
  }

  editBook(id: String) {
    // Navigate to the edit form
    this.router.navigate(['/book-form', id]);
  }
  borrowBook(id: String) {
    this.router.navigate(['/book-form', id]);
  }

  redirectToUserDetails(userId: number) {
    this.router.navigate(['/profile', userId]);
  }

}
