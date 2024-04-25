import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { bookStore } from '../../store/book.store';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../assets/interface/user.interface';



@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule, SharedModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
  bookId: string = '';
  editStatus: Boolean = false;
  randId = ""
  book: Book = {
    id: "",
    title: "",
    author: "",
    description: "",
    releaseDate: "",
    image: "",
    available: true,
    history: []
  }
  bookStore = inject(bookStore)
  bookForm: FormGroup = new FormGroup({

  });;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.bookId = params.get('id') ?? '';
      if (this.bookId) {
        const result = this.bookStore.findOne(this.bookId)
        if (result) {
          this.editStatus = true
          this.book = result
        }
      } else {
      
        console.log('User ID not provided');
      }
    });

    this.bookForm = this.formBuilder.group({
      title: [this.book.title, Validators.required],
      author: [this.book.author, Validators.required],
      description: [this.book.description, Validators.required],
      releaseDate: [this.book.releaseDate, Validators.required],
      image: [this.book.image, Validators.required],
    });

    this.randId = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
  }
  get f(): { [key: string]: AbstractControl } {
    return this.bookForm.controls;
  }
  onSubmit(): void {

    this.submitted = true;

    if (this.bookForm.invalid) {
      return;
    }

    if (this.editStatus) {
      alert("Book edited successfully")
      this.bookStore.updateBooks(this.bookForm.value, this.book.id)
    } else {

      this.book = { ...this.book, ...this.bookForm.value };
      this.book.id = this.randId
      alert("Book added successfully")
      this.bookStore.AddBooks(this.book)
    }
    this.router.navigate(['/home']); 
  }
}
