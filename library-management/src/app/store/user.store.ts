import { patchState, signalState, signalStore, withMethods, withState } from "@ngrx/signals";
import { currentUser } from "../../assets/interface/user.interface";

export interface userState {
    user: currentUser
}

const initalUserState: userState = {
    user: {
        name: "",
        email: "",
        role: "",
        accessToken: ""
    }
}

export const userStore = signalStore(
    { providedIn: "root" },
    withState(initalUserState),
    withMethods(({ user, ...store }) => ({
        setUser(user: currentUser) {
         localStorage.setItem("user",JSON.stringify(user))
         patchState(store, { user: user })
        }
    })
    )
);