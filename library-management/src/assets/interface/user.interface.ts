// user.interface.ts
export interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
    borrowedBooks: number;
    returnedBooks: number;
    holdingBooks: number;
  }
  