import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Book, User, currentUser } from "../../assets/interface/user.interface";
import { dummyBooks, dummyUsers } from "../../dummy/duydata";

export interface usersState {
    Users: User[]
}

const initalUsersState: usersState = {
    Users: dummyUsers
}

export const userListStore = signalStore(
    { providedIn: "root" },
    withState(initalUsersState),
    withMethods(({ Users, ...store }) => ({
        setUsers(users: User[]) {
            //storing locally to presist
            localStorage.setItem("userslist", JSON.stringify(users))
            patchState(store, { Users: users })
        },
        AddUser(User: currentUser) {
            
            const user: User = {
                id:  Number(Math.floor(Math.random() * 100000).toString().padStart(5, '0')),
                name: User.name,
                email: User.email,
                isActive: false,
                borrowedBooks: 0,
                returnedBooks: 0,
                holdingBooks: 0,
                maxBookLimit: 0,
                bookHistory: [],
                role: User.role
            }
            

            const updatedUsers = [...Users(), user]
            //storing locally to presist
            localStorage.setItem("userslist", JSON.stringify(updatedUsers))
            patchState(store, { Users: updatedUsers })
        },
        updateUser(user: User, id: Number) {
            const updatedUsers = Users().map(existingUser => {
                if (existingUser.id === id) {
                    return { ...existingUser, ...user };
                }
                return existingUser;
            });
            //storing locally to presist
            localStorage.setItem("userslist", JSON.stringify(updatedUsers))
            patchState(store, { Users: updatedUsers })
        },
        findOne(id: Number): User | undefined {

            return Users().find(user => user.id === id);
        },
        findByEmail(email: String): User | undefined {
            return Users().find(user => user.email == email);
        },
      
    })
    )

);