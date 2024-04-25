import { Injectable, inject } from '@angular/core';
import { userStore } from '../store/user.store';
import { Book, User, currentUser } from "../../assets/interface/user.interface";
import { bookStore } from '../store/book.store';
import { userListStore } from '../store/userList.store';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    userStore = inject(userStore);
    bookStore = inject(bookStore);
    userListStore = inject(userListStore)

    localUser: currentUser = {
        name: '',
        email: '',
        role: '',
        accessToken: ''
    }
    localBooks: Book[] = [];
    localUserList: User[] = []

    setLocalUser() {
        try {
            const localUserData = localStorage.getItem("user");
            if (localUserData) {
                const parsedUserData: currentUser = JSON.parse(localUserData);
                if (this.isValidCurrentUser(parsedUserData)) {
                    this.userStore.setUser(parsedUserData);
                } else {
                    console.error("Invalid user data in local storage.");
                }
            }
        } catch (error) {
            console.error("Error while setting local user:", error);
        }
    }

    setLocalBooks() {
        try {
            const localBooksData = localStorage.getItem("books");
            
            if (localBooksData) {
                const parsedBooksData: Book[] = JSON.parse(localBooksData);
                
                this.bookStore.setBooks(parsedBooksData);
            }
        } catch (error) {
            console.error("Error while setting local books:", error);
        }
    }

    setLocalUserList() {
        try {
            const localUserListData = localStorage.getItem("userslist");
            if (localUserListData) {
                const parsedUserListData: User[] = JSON.parse(localUserListData);
               
                    this.userListStore.setUsers(parsedUserListData);
               
            }
        } catch (error) {
            console.error("Error while setting local user list:", error);
        }
    }

    private isValidCurrentUser(data: any): data is currentUser {
        return (
            typeof data.name === 'string' &&
            typeof data.email === 'string' &&
            typeof data.role === 'string' &&
            typeof data.accessToken === 'string'
        );
    }

    private isValidBooksData(data: any): data is Book[] {
        return Array.isArray(data) && data.every(this.isValidBook);
    }

    private isValidBook(data: any): data is Book {
        return (
            typeof data.id === 'string' &&
            typeof data.title === 'string' &&
            typeof data.author === 'string' &&
            typeof data.description === 'string' &&
            typeof data.releaseDate === 'string' &&
            typeof data.image === 'string' &&
            typeof data.available === 'boolean' &&
            Array.isArray(data?.history) && data?.history.every(this.isValidBookHistory)
        );
    }

    private isValidBookHistory(data: any): boolean {
        return (
            typeof data.userId === 'number' &&
            typeof data.name === 'string' &&
            typeof data.action === 'string' &&
            typeof data.date === 'string'
        );
    }

    private isValidUserListData(data: any): data is User[] {
        return Array.isArray(data) && data.every(this.isValidUser);
    }

    private isValidUser(data: any): data is User {
        return (
            typeof data.id === 'number' &&
            typeof data.name === 'string' &&
            typeof data.email === 'string' &&
            typeof data.isActive === 'boolean' &&
            typeof data.borrowedBooks === 'number' &&
            typeof data.returnedBooks === 'number' &&
            typeof data.holdingBooks === 'number'
        );
    }
}
