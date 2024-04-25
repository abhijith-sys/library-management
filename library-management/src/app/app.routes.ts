import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { adminGuard, authGuard } from './guard/auth.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

export const routes: Routes = [
    { path: "", component: SignupComponent },
    { path: "login", component: LoginComponent },
    {
        path: "", component: LayoutComponent,canActivate:[authGuard],
        children: [
            { path: "home", component: HomeComponent },
            { path: "profile", component: ProfileComponent },
            { path: "profile-form", component: ProfileFormComponent},
            { path: "book-details/:id", component: BookDetailsComponent },
            { path: "profile/:userId", component: ProfileComponent ,canActivate:[adminGuard]},
            { path: "userlist", component: UserListComponent,canActivate:[adminGuard] },
            { path: "book-form", component: BookFormComponent,canActivate:[adminGuard] },
            { path: "book-form/:id", component: BookFormComponent,canActivate:[adminGuard] },
            { path: "profile-form/:id", component: ProfileFormComponent,canActivate:[adminGuard] }
        ]
    },
    { path: "**", component: PageNotFoundComponent },
];
