import { Injectable, inject } from '@angular/core';
import { userStore } from '../store/user.store';
import { currentUser } from '../../assets/interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Store = inject(userStore)
  user:currentUser ={
    name: '',
    email: '',
    role: '',
    accessToken: ''
  }
  constructor() { }
  getCurrentUserRole() {
    this.user= JSON.parse(localStorage.getItem("user") ?? "")
    return this.user.role
  }
  isLoggedIn() {
    //const user = this.Store.user()
    this.user = JSON.parse(localStorage.getItem("user") ?? "")


    if (this.user.accessToken.length>2) {
      return true;
    } else {
      return false
    }
  }

  isAdmin() {
    this.user= JSON.parse(localStorage.getItem("user") ?? "")
    // const user = this.Store.user()
    if (this.user.role == "admin") {
      return true;
    } else {
      return false
    }
  }
} 
