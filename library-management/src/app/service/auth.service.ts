import { Injectable, inject } from '@angular/core';
import { userStore } from '../store/user.store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Store = inject(userStore)
  user = JSON.parse(localStorage.getItem("user") ?? "")
  constructor() { }
  getCurrentUserRole() {
    return this.user.role
  }
  isLoggedIn() {
    //const user = this.Store.user()
    console.log(this.user);

    if (this.user.accessToken) {
      return true;
    } else {
      return false
    }
  }

  isAdmin() {
    // const user = this.Store.user()
    if (this.user.role == "admin") {
      return true;
    } else {
      return false
    }
  }
} 
