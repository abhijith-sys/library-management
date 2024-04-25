import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { dummytoken } from '../../dummy/duydata';
import { userListStore } from '../store/userList.store';
import { User } from '../../assets/interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  userListStore=inject(userListStore);
  user:User={
    id: 0,
    name: '',
    email: '',
    isActive: false,
    borrowedBooks: 0,
    returnedBooks: 0,
    holdingBooks: 0,
    role: '',
    maxBookLimit: 0,
    bookHistory: []
  }
  // apiUrl = environment.apiUrl;

  constructor() { }

  registerUser(userData: any): Observable<any> {
    // return this.http.post<any>(`${this.apiUrl}/register`, userData);
    const transformedData = {
      name: userData.fullname ?? " ",
      email: userData.email,
      role: userData.role,
  
    };
    const userFound = this.userListStore.findByEmail(userData.email);
    if (userFound) {
     // Return an error Observable when the user is not found
     return throwError(() => new Error('User already registed'));
     
    } else {
      
      return of({ 
        success: true,
        message: 'Dummy success response',
        data: {...transformedData, ...dummytoken}
      });
    }
  }

  loginUser(userData: any): Observable<any> {
    // return this.http.post<any>(`${this.apiUrl}/login`, userData);
    const transformedData = {
      name: " ",
      email: userData.email,
      role: userData.role,
    };
    const userFound = this.userListStore.findByEmail(userData.email);
    if (userFound) {
      this.user = userFound;
      return of({ 
        success: true,
        message: 'Dummy success response',
        data: {...transformedData, ...dummytoken}
      });
    } else {
      // Return an error Observable when the user is not found
      return throwError(() => new Error('User not found'));
    }
  }
}
