import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    { path: "", component: SignupComponent },
    { path: "login", component: LoginComponent },
    {
        path: "dashboard", component: LayoutComponent,
        children: [
            { path: "home", component: HomeComponent },
            { path: "profile", component: ProfileComponent },
            { path: "userlist", component: UserListComponent }
        ]
    },

];
