import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router, RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';


import { Subscription } from 'rxjs';
import { userStore } from '../../store/user.store';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatSlideToggleModule, MatSlideToggleModule, ReactiveFormsModule, CommonModule, NgbModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  svgPath: string = '../../assets/images/finallogin.svg';
  Store = inject(userStore)
  form: FormGroup = new FormGroup({
  
  });

  submitted = false;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService,private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {

        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
       
        role: ['user', Validators.required]
      }
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

    const registerSubscription: Subscription = this.apiService.loginUser(this.form.value).subscribe({
      next: (response) => {
        this.Store.setUser(response?.data);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Registration failed:', error);
        // Handle error response
      }
    });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
