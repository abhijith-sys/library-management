import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Book } from "../../assets/interface/user.interface";
import { dummyBooks } from "../../dummy/duydata";

export interface bookState {
    books: Book[]
}

const initalBookstate: bookState = {

    books: dummyBooks

}

export const bookStore = signalStore(
    { providedIn: "root" },
    withState(initalBookstate),
    
    withMethods(({ books, ...store }) => ({
        setBooks(book: Book[]) {
            //storing locally to presist
            localStorage.setItem("books",JSON.stringify(book))
            patchState(store, { books: book })
        },
        AddBooks(book: Book) {
            
            const updatedBooks = [...books(), book]
            //storing locally to presist
            localStorage.setItem("books",JSON.stringify(updatedBooks))
            patchState(store, { books: updatedBooks })
        },
        updateBooks(book: Book, id: String) {
            const updatedBooks = books().map(existingBook => {
                if (existingBook.id === id) {
                    // Update the details of the book with the matching ID
                    return { ...existingBook, ...book };
                }
                return existingBook;
            });
            //storing locally to presist
            localStorage.setItem("books",JSON.stringify(updatedBooks))
            patchState(store, { books: updatedBooks })
        },
        findOne(id: string): Book | undefined {
            // Find the book with the given ID
            return books().find(book => book.id === id);
        }
    })
    )

);