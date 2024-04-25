import { Component, inject } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { userStore } from '../../store/user.store';
import { userListStore } from '../../store/userList.store';
import { ApiService } from '../../service/api.service';
import Validation from '../../utils/validation';
import { SharedModule } from '../../shared/shared.module';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatSlideToggleModule, ReactiveFormsModule, CommonModule, NgbModule, RouterLink, SharedModule,],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  Store = inject(userStore);
  userListStore = inject(userListStore);


  svgPath: string = '../../assets/images/Manreading-pana.svg';

  form: FormGroup = new FormGroup({});

  submitted = false;


  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
        role: ['user', Validators.required]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      },

    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const registerSubscription: Subscription = this.apiService.registerUser(this.form.value).subscribe({
      next: (response) => {
        this.Store.setUser(response?.data);
        this.userListStore.AddUser(response?.data)
        this.router.navigate(['/home']);
      },
      error: (error) => {
        alert('Registration failed:' + error);
        // Handle error response
      }
    });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
