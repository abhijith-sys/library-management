import { User } from "../assets/interface/user.interface";

export const dummyBooks = [
  {
    id: "1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A classic novel set in the American South during the 1930s.",
    releaseDate: "1960-07-11",
    image: "https://imgs.search.brave.com/NukST9LKcv6c-h4HtUuMf73VDzu_MNQoUPqtpG5w4NI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L29u/ZXBpZWNlL2ltYWdl/cy9mL2YyL09uZV9Q/aWVjZV9QaWN0dXJl/X0Jvb2tfQ292ZXJf/OS5wbmcvcmV2aXNp/b24vbGF0ZXN0L3Nj/YWxlLXRvLXdpZHRo/LWRvd24vMjEwP2Ni/PTIwMjIxMDAzMjAw/OTM4.jpeg",
    available: true,
    history: [
      { userId: 1, name: 'John Doe', action: "borrow", date: "2024-04-01" },
      { userId: 1, name: 'John Doe', action: "return", date: "2024-04-10" },
      { userId: 2, name: 'Alice Smith', action: "borrow", date: "2024-04-20" }
    ]
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel set in a totalitarian regime.",
    releaseDate: "1949-06-08",
    image: "https://imgs.search.brave.com/NukST9LKcv6c-h4HtUuMf73VDzu_MNQoUPqtpG5w4NI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L29u/ZXBpZWNlL2ltYWdl/cy9mL2YyL09uZV9Q/aWVjZV9QaWN0dXJl/X0Jvb2tfQ292ZXJf/OS5wbmcvcmV2aXNp/b24vbGF0ZXN0L3Nj/YWxlLXRvLXdpZHRo/LWRvd24vMjEwP2Ni/PTIwMjIxMDAzMjAw/OTM4.jpeg",
    available: true,
    history: [
      { userId: 2, name: 'Alice Smith', action: "borrow", date: "2024-04-05" },
      { userId: 2, name: 'Alice Smith', action: "return", date: "2024-04-15" },
      { userId: 3, name: 'Bob Johnson', action: "borrow", date: "2024-04-25" }
    ]
  },
  {
    id: '3',
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A novel set in the Roaring Twenties.",
    releaseDate: "1925-04-10",
    image: "https://imgs.search.brave.com/NukST9LKcv6c-h4HtUuMf73VDzu_MNQoUPqtpG5w4NI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L29u/ZXBpZWNlL2ltYWdl/cy9mL2YyL09uZV9Q/aWVjZV9QaWN0dXJl/X0Jvb2tfQ292ZXJf/OS5wbmcvcmV2aXNp/b24vbGF0ZXN0L3Nj/YWxlLXRvLXdpZHRo/LWRvd24vMjEwP2Ni/PTIwMjIxMDAzMjAw/OTM4.jpeg",
    available: false,
    history: [
      { userId: 3, name: 'Bob Johnson', action: "borrow", date: "2024-03-01" },
      { userId: 3, name: 'Bob Johnson', action: "return", date: "2024-03-15" },
      { userId: 1, name: 'John Doe', action: "borrow", date: "2024-04-20" }
    ]
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A romantic novel set in Georgian England.",
    releaseDate: "1813-01-28",
    image: "https://imgs.search.brave.com/NukST9LKcv6c-h4HtUuMf73VDzu_MNQoUPqtpG5w4NI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L29u/ZXBpZWNlL2ltYWdl/cy9mL2YyL09uZV9Q/aWVjZV9QaWN0dXJl/X0Jvb2tfQ292ZXJf/OS5wbmcvcmV2aXNp/b24vbGF0ZXN0L3Nj/YWxlLXRvLXdpZHRo/LWRvd24vMjEwP2Ni/PTIwMjIxMDAzMjAw/OTM4.jpeg",
    available: true,
    history: [
      { userId: 4, name: 'Emma Brown', action: "borrow", date: "2024-04-10" },
      { userId: 4, name: 'Emma Brown', action: "return", date: "2024-04-20" }
    ]
  },
  {
    id:"5",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "A coming-of-age novel set in the 1950s.",
    releaseDate: "1951-07-16",
    image: "https://imgs.search.brave.com/NukST9LKcv6c-h4HtUuMf73VDzu_MNQoUPqtpG5w4NI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L29u/ZXBpZWNlL2ltYWdl/cy9mL2YyL09uZV9Q/aWVjZV9QaWN0dXJl/X0Jvb2tfQ292ZXJf/OS5wbmcvcmV2aXNp/b24vbGF0ZXN0L3Nj/YWxlLXRvLXdpZHRo/LWRvd24vMjEwP2Ni/PTIwMjIxMDAzMjAw/OTM4.jpeg",
    available: false,
    history: [
      { userId: 5, name: 'Mike Wilson', action: "borrow", date: "2024-04-15" },
      { userId: 5, name: 'Mike Wilson', action: "return", date: "2024-04-30" }
    ]
  }
];
;
  

export const dummyUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    isActive: true,
    borrowedBooks: 3,
    returnedBooks: 2,
    holdingBooks: 1,
    bookHistory: [
      { bookId: "1", title: "To Kill a Mockingbird", status: "Returned", takenDate: "2024-04-01", returnedDate: "2024-04-10" },
      { bookId: "2", title: "1984", status: "Borrowed", takenDate: "2024-04-05", returnedDate: "" },
      { bookId: "3", title: "The Great Gatsby", status: "Borrowed", takenDate: "2024-04-20", returnedDate: "" }
    ],
    maxBookLimit: 4,
    role: "0"
  },
  {
    id: 2,
    name: 'Alice Smith',
    email: 'alice@example.com',
    isActive: true,
    borrowedBooks: 2,
    returnedBooks: 2,
    holdingBooks: 0,
    bookHistory: [
      { bookId: "1", title: "To Kill a Mockingbird", status: "Borrowed", takenDate: "2024-04-20" },
      { bookId: "2", title: "1984", status: "Returned", takenDate: "2024-04-05", returnedDate: "2024-04-15" }
    ],
    maxBookLimit: 0,
    role: "0"
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    isActive: false,
    borrowedBooks: 5,
    returnedBooks: 3,
    holdingBooks: 2,
    bookHistory: [
      { bookId: "3", title: "The Great Gatsby", status: "Borrowed", takenDate: "2024-03-01", returnedDate: "2024-03-15" }
    ],
    maxBookLimit: 0,
    role: "0"
  },
  {
    id: 4,
    name: 'Emma Brown',
    email: 'emma@example.com',
    isActive: true,
    borrowedBooks: 1,
    returnedBooks: 1,
    holdingBooks: 0,
    bookHistory: [
      { bookId: "4", title: "Pride and Prejudice", status: "Returned", takenDate: "2024-04-10", returnedDate: "2024-04-20" }
    ],
    maxBookLimit: 2,
    role: "0"
  },
  {
    id: 5,
    name: 'Mike Wilson',
    email: 'mike@example.com',
    isActive: true,
    borrowedBooks: 4,
    returnedBooks: 4,
    holdingBooks: 0,
    bookHistory: [
      { bookId: "5", title: "The Catcher in the Rye", status: "Returned", takenDate: "2024-04-15", returnedDate: "2024-04-30" }
    ],
    maxBookLimit: 0,
    role: "0"
  },
];


  export const  dummytoken ={
    "accessToken":"dummytoken"
  }