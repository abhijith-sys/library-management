// user.interface.ts
export interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  borrowedBooks: number;
  returnedBooks: number;
  holdingBooks: number;
  role:string;
  maxBookLimit:number;
  bookHistory: BookHistory[];
}

interface BookHistory {
  bookId: string;
  title: string;
  status: string;
  takenDate: string;
  returnedDate?: string;
}

  export interface currentUser {
    name: string;
    email: string;
    role:string;
    accessToken:string
  }

  export interface Book {
    id: string;
    title: string;
    author: string;
    description: string;
    releaseDate: string;
    image: string;
    available: boolean;
    history:{ userId: number; name: string; action: string; date: string; }[];
  }