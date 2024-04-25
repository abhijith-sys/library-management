import { Component, inject } from '@angular/core';
import { User } from '../../../assets/interface/user.interface';
import { userListStore } from '../../store/userList.store';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { userStore } from '../../store/user.store';
import { LocalStorageService } from '../../service/localStorage.service';
import { ADMIN_ROLE } from '../../utils/constants';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.css'
})
export class ProfileFormComponent {
  userId: Number = 0;
  adminrole = ADMIN_ROLE;
  currentuserRole = ""
  randId = ""
  user: User = {
    id: 0,
    name: '',
    email: '',
    isActive: false,
    borrowedBooks: 0,
    returnedBooks: 0,
    holdingBooks: 0,
    bookHistory: [],
    maxBookLimit: 1,
    role: "0"
  }
  userListStore = inject(userListStore);
  localService = inject(LocalStorageService)
  userStore = inject(userStore)
  AuthService = inject(AuthService)
  userForm: FormGroup = new FormGroup({

  });;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.localService.setLocalUser() 
    this.localService.setLocalBooks()
    this.localService.setLocalUserList()
    this.currentuserRole = this.AuthService.getCurrentUserRole();
    // Retrieving the userId parameter from the route
    this.route.paramMap.subscribe(params => {
      // Accessing the userId parameter

      this.userId =Number(params.get('id'))  ?? 0;
      // Check if userId is present
      if (this.userId) {
        const result = this.userListStore.findOne(this.userId)
        if (result) {
        
          this.user = result
        }
      } else {
        const result = this.userListStore.findByEmail(this.userStore.user().email)
        if (result) {
        
          this.user = result
        }else{
          this.user.name=this.userStore.user().name;
          this.user.email=this.userStore.user().email;
        }
       
        
      }
    });

    this.userForm = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, Validators.required],
      maxBookLimit: [this.user.maxBookLimit, Validators.required],
    });

    this.randId = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  onSubmit(): void {

    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }

 
      alert("Details updatd successfully")
      this.userListStore.updateUser(this.userForm.value, this.user.id)
  



    this.router.navigate(['/profile']);
    // Simulate sending data to a server (replace with actual API call)
  }
}
